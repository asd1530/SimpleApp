using System;
using Microsoft.EntityFrameworkCore;

namespace Common.Entity
{
    /// <summary>
    /// #RAR
    /// </summary>

    public class SieBookingYear : BaseEntity
    {
        public int BookyearId { get; set; }
       
        public DateTime? Start { get; set; }
        
        public DateTime? End { get; set; }
        public static void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<SieBookingYear>(y => {
                y.HasKey(x => x.Id);
                y.Property(s => s.Start).HasColumnType("date");
                y.Property(e => e.End).HasColumnType("date");
            });
        }

    }
}
