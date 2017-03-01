using System.IO;
using Core.Data;
using System.Linq;
using System;
using System.Diagnostics;
using Common.Entity;
using Common.Sie;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace Core.Logic
{
    public class SieFileImportManager : ISieFileImportManager
    {

        private readonly DataAccessContext data;

        public SieFileImportManager(DataAccessContext _data)
        {
            this.data = _data;
        }

        public IReadOnlyCollection<SieFileImport> GetAll()
        {
            return this.data.SieFileImports.ToList().AsReadOnly();
        }
        public SieFileImport Get(long id)
        {
            // Create new stopwatch.
            var result = this.data.SieFileImports.Find(id);
            return result;
        }


        public long ProcessSieStream(StreamReader stream)
        {
            // Create new stopwatch.
            Stopwatch stopwatch = new Stopwatch();

            // Begin timing.
            stopwatch.Start();
            var company = CheckCompany();
            var sieFileImport = this.StoreImport(company);
            SieDocument sd = new SieDocument(company, sieFileImport);
            sd.IgnoreBTRANS = true;
            sd.IgnoreRTRANS = true;
            sd.IgnoreMissingOMFATTNING = true;
            sd.ReadStreamDocument(stream);
            var countAccounts = this.StoreAccounts(sd);
            var countFiscalYears = this.StoreFiscalYears(sd);
            var countVouchers = this.StoreVouchers(sd);
            var countVoucherRows = this.StoreVoucherRows(sd);
            sieFileImport.VouchersCount = countVouchers;
            sieFileImport.VoucherRowsCount = countVoucherRows;
            sieFileImport.BookingYearsCount = countFiscalYears;
            sieFileImport.AccountsCount = countAccounts;
            this.CompleteSieFile(sieFileImport);
            stopwatch.Stop();

            // Write result.
            Console.WriteLine("Time elapsed: {0}", stopwatch.Elapsed);
            return sieFileImport.Id;
        }

        private Company CheckCompany()
        {
            Company company = null;
            if (this.data.Companies == null || this.data.Companies.Count() < 1)
            {
                company = new Company()
                {
                    Name = "DefaultCompany",
                    Code = "1000",
                    OrgIdentifier = "555-10000",
                    Contact = "Me",
                    Street = "Elm",
                    ZipCity = "10000",
                    Phone = "call-me"
                };
                this.data.Companies.Add(company);
                this.data.SaveChanges();
            }
            else
            {
                company = this.data.Companies.First();
            }
            return company;
        }

        private void CompleteSieFile(SieFileImport import)
        {
            import.Status = 0;
            this.data.Set<SieFileImport>().Attach(import);
            this.data.Entry(import).State = EntityState.Modified;
            this.data.SaveChanges();
        }
        private SieFileImport StoreImport(Company company)
        {
            SieFileImport sfi = new SieFileImport()
            {
                Company = company,
                Name = company.OrgIdentifier + "- InProgress",
                LastModified = DateTime.Now,
                Status = 1
            };
            this.data.SieFileImports.Add(sfi);
            this.data.SaveChanges();
            return sfi;
        }

        private int StoreVoucherRows(SieDocument sd)
        {
            int result = 0;
            try
            {
                int count = 0;
                foreach (var voucher in sd.VER)
                {
                    this.data.VoucherRows.AddRange(voucher.Rows);
                    count += voucher.Rows.Count();
                    if (count > 2000)
                    {
                        this.data.SaveChanges();
                        result += count;
                        count = 0;
                    }
                }
            }
            finally
            {

            }
            return result;
        }

        private int StoreVouchers(SieDocument sd)
        {
            int result = 0;
            try
            {
                this.data.Vouchers.AddRange(sd.VER);
                result = sd.VER.Count();
                this.data.SaveChanges();
            }
            finally
            {
            }
            return result;
        }

        private int StoreFiscalYears(SieDocument sd)
        {
            var fiscalYears = sd.RAR.Values.AsEnumerable();
            this.data.SieBookingYears.AddRange(fiscalYears);
            this.data.SaveChanges();
            return fiscalYears.Count();
        }

        private int StoreAccounts(SieDocument sd)
        {
            var list = sd.KONTO.Values.AsEnumerable();
            int batchSize = 100;
            try
            {
                // this.data.ChangeTracker.AutoDetectChangesEnabled = false;

                for (var ndx = 0; (list.Count() - ndx * batchSize) >= 0; ndx++)
                {
                    this.data.SieAccounts.AddRange(list.Skip(ndx * batchSize).Take(batchSize));
                    this.data.SaveChanges();
                }
            }
            finally
            {
                // this.data.ChangeTracker.AutoDetectChangesEnabled = true;
            }
            return list.Count();
        }
    }
}