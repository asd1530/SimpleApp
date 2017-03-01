using System;
using System.Collections.Generic;
using Common.Sie;
using Microsoft.EntityFrameworkCore;

namespace Common.Entity
{

    public class SieVoucherRow : BaseEntity
    {
        public SieAccount Account { get; set; }
        public List<SieObject> Objects { get; set; }
        public decimal Amount { get; set; }
        public DateTime RowDate { get; set; }
        public string Text { get; set; }
        public decimal? Quantity;
        public string CreatedBy { get; set; }
        public string Token { get; set; }
        public static void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<SieVoucherRow>().HasKey(x => x.Id);
            builder.Entity<SieVoucherRow>().Ignore(x => x.Objects);
        }

    }
}
