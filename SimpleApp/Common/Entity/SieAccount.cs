using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Common.Entity
{
    /// <summary>
    /// #KONTO
    /// </summary>
    public class SieAccount : BaseEntity
    {
        public SieAccount()
        {
            SRU = new HashSet<string>();

            Name = "";
        }
        public string Number { get; set; }
        public string Name { get; set; }
        public string Unit { get; set; }
        public string Type { get; set; }

        public HashSet<string> SRU { get; set; }
        public static void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<SieAccount>().HasKey(x => x.Id);
            builder.Entity<SieAccount>().Ignore(x => x.SRU);
            
        }

    }
}
