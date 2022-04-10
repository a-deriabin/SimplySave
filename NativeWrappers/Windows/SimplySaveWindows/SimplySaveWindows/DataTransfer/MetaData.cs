using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace SimplySaveWindows.DataTransfer
{
    public class MetaData
    {
        [JsonPropertyName("notes")]
        public List<NoteData> Notes { get; set; }
        [JsonPropertyName("folders")]
        public List<FolderData> Folders { get; set; }
    }
}
