using Microsoft.EntityFrameworkCore;

namespace Common.Entity
{

    public class Company 
    {
         public long Id { get; set; }

        public string Name { get; set; }
        public string Code { get; set; }
        public string OrgType { get; set; }
        public string OrgIdentifier { get; set; }
        public string Contact { get; set; }
        public string Street { get; set; }
        public string ZipCity { get; set; }
        public string Phone { get; set; }

        public static void OnModelCreating(ModelBuilder builder) {
            builder.Entity<Company>(c => {
                c.HasKey(i => i.Id);
                c.Property(i => i.Id).ValueGeneratedOnAdd();
            });
            
        }
    }
}
