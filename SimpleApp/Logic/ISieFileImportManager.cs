
using System.Collections.Generic;
using System.IO;
using Common.Entity;

namespace Core.Logic
{
    public interface ISieFileImportManager
    {
        IReadOnlyCollection<SieFileImport> GetAll();
        SieFileImport Get(long id);
        long ProcessSieStream(StreamReader stream);
    }
}