using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Common.Entity
{
    public class SieVoucher : BaseEntity
    {
        public string Series { get; set; }
        public string Number { get; set; }
        public DateTime VoucherDate { get; set; }
        public string Text { get; set; }
        public int CreatedDate { get; set; }
        public string CreatedBy { get; set; }
        public string Token { get; set; }

        public List<SieVoucherRow> Rows { get; set; }
        
        public SieVoucher()
        {
            Rows = new List<SieVoucherRow>();
        }
        public string MonthKey()
        {
            return VoucherDate.Year.ToString() + "_" + VoucherDate.Month.ToString();
        }

        public static void OnModelCreating(ModelBuilder builder) {
            builder.Entity<SieVoucher>().HasKey(x => x.Id);
            builder.Entity<SieVoucher>().Ignore(x => x.Rows);
            
        }


    }
}
