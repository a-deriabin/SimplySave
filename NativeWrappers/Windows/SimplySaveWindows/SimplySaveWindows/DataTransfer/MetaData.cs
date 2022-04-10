using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SimplySaveWindows.DataTransfer
{
    public class MetaData
    {
        public List<NoteData> notes { get; set; }
        public List<FolderData> folders { get; set; }
    }
}
