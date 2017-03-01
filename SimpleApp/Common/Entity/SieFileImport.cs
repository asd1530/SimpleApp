using System;
using Microsoft.EntityFrameworkCore;

namespace Common.Entity
{
    public class SieFileImport
    {
        public long Id { get; set; }
        public Company Company { get; set; }
        public string Name { get; set; }

        public DateTime LastModified { get; set; }

        public int AccountsCount {get;set;}

        public int BookingYearsCount {get;set;}

        public int VouchersCount { get; set; }

        public int VoucherRowsCount { get; set; }

        public int Status {get ; set;}

        public static void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<SieFileImport>().HasKey(x => x.Id);
        }

    }
}