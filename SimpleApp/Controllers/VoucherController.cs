using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Core.Logic;
using Core.Data;
using Common.Sie;
using Common.Entity;

namespace Core.Controllers
{
    [Route("api/{importId}/[controller]")]
    public class VoucherController : Controller
    {
        private readonly ISieFileImportManager _sieFileImportManager;
        private readonly IDataManager _dataManager;

        public VoucherController(ISieFileImportManager _sieFileImportManager, IDataManager _dataManager)
        {
            this._sieFileImportManager = _sieFileImportManager;
            this._dataManager = _dataManager;
        }
        // GET api/values
        [HttpGet]
        public IReadOnlyCollection<SieVoucher> Get(long importId)
        {
            System.Console.WriteLine("----------------------------" + importId);
            return this._dataManager.ListVouchers();
        }

        // GET api/values
        [HttpGet]
        public Dictionary<string, List<SieVoucher>> GetGrouped(long importId)
        {
            System.Console.WriteLine("----------------------------" + importId);
            return this._dataManager.ListVouchersByMonth();
        }
        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }
        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
