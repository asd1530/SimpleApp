using Common.Entity;
using Microsoft.EntityFrameworkCore;


namespace Core.Data
{
    public class DataAccessContext : DbContext
    {
        public DataAccessContext(DbContextOptions<DataAccessContext> options)
                : base(options)
        { }

        public DbSet<Company> Companies { get; set; }
        public DbSet<SieFileImport> SieFileImports { get; set; }
        public DbSet<SieAccount> SieAccounts { get; set; }
        public DbSet<SieBookingYear> SieBookingYears { get; set; }
        public DbSet<SieVoucher> Vouchers { get; set; }
        public DbSet<SieVoucherRow> VoucherRows { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            Company.OnModelCreating(modelBuilder);
            SieFileImport.OnModelCreating(modelBuilder);
            SieAccount.OnModelCreating(modelBuilder);
            SieBookingYear.OnModelCreating(modelBuilder);
            SieVoucher.OnModelCreating(modelBuilder);
            SieVoucherRow.OnModelCreating(modelBuilder);
            

        }
    }
}
