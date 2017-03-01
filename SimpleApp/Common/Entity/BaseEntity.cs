namespace Common.Entity
{
    /// <summary>
    /// #KONTO
    /// </summary>
    public class BaseEntity
    {       
        public long Id { get; set; }
        public Company Company { get; set; }

        public SieFileImport Import { get;set; }
    }
}
