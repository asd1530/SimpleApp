using System.Collections.Generic;
using Common.Entity;
using Core.Data;
using System.Linq;

namespace Core.Logic
{
    public class DataManager : IDataManager
    {
        private readonly DataAccessContext data;
        public DataManager(DataAccessContext _data)
        {
            this.data = _data;
        }

        public IReadOnlyDictionary<string, SieAccount> ListAccounts()
        {
            return null;
        }
        public IReadOnlyCollection<SieVoucher> ListVouchers()
        {
            return data.Vouchers.ToList().AsReadOnly();            
        }
        public Dictionary<string, List<SieVoucher>> ListVouchersByMonth()
        {
            return data.Vouchers.AsQueryable().GroupBy(v => v.MonthKey()).ToDictionary(v => v.Key, v => v.ToList());
                // ToList().AsReadOnly();
        }

    }
}