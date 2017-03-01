using System.Collections.Generic;
using Microsoft.AspNetCore.Hosting;
using System.Net.Http.Headers;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Core.Logic;
using Core.Data;
using Common.Entity;

namespace Core.Controllers
{
    [Route("api/[controller]")]
    public class SieController : Controller
    {
        private IHostingEnvironment hostingEnv;
        
        private readonly ISieFileImportManager _sieFileImportManager ;
        public SieController(IHostingEnvironment env, ISieFileImportManager _sieFileImportManager )
        {
            this.hostingEnv = env;
            this._sieFileImportManager=_sieFileImportManager;
        }
        // GET api/values
        [HttpGet]
        public IReadOnlyCollection<SieFileImport> Get()
        {
            return _sieFileImportManager.GetAll();
            
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public SieFileImport Get(long id)
        {
            return _sieFileImportManager.Get(id);
        }

        // POST api/values
        [HttpPost]
        [Route("upload")]
        public SieFileImport Upload()
        {
            long size = 0;
            long newId=-1;
            var files = Request.Form.Files;
            foreach (var file in files)
            {
                var filename=file.FileName.Substring(file.FileName.LastIndexOf(Path.DirectorySeparatorChar)+1);
                
                filename = hostingEnv.WebRootPath + $@"\{filename}";
                size += file.Length;
                StreamReader sr = new StreamReader(file.OpenReadStream());
                using (StreamReader reader =new StreamReader(file.OpenReadStream())) {
                   newId = _sieFileImportManager.ProcessSieStream(reader);
                }
            }
            string message = $"{files.Count} file(s) / { size} bytes uploaded successfully!";
            var result= this.Get(newId);
            return result;
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
