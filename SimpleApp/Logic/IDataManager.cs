
using System.Collections.Generic;
using Common.Entity;

namespace Core.Logic
{
    public interface IDataManager
    {
        IReadOnlyDictionary<string,SieAccount> ListAccounts();
        IReadOnlyCollection<SieVoucher> ListVouchers();
        Dictionary<string, List<SieVoucher>> ListVouchersByMonth();
    }
}