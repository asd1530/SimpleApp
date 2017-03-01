using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Core.Logic;
using Core.Data;
using Common.Entity;

namespace Core.Controllers
{
    [Route("api/[controller]")]
    public class DataController : Controller
    {
        private readonly ISieFileImportManager _sieFileImportManager;
        private readonly IDataManager _dataManager;

        public DataController(ISieFileImportManager _sieFileImportManager, IDataManager _dataManager)
        {
            this._sieFileImportManager = _sieFileImportManager;
            this._dataManager = _dataManager;
        }
        // GET api/values
        [HttpGet]
        public IList<SieFileImport> Get()
        {
            return null;

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
