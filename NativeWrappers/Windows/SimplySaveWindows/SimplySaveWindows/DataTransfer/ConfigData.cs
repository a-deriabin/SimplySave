using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace SimplySaveWindows.DataTransfer
{
    public class ConfigData
    {
        [JsonPropertyName("dataDirPath")]
        public string DataDirPath { get; set; }
        [JsonPropertyName("notesSort")]
        public string Sort { get; set; }
    }
}
