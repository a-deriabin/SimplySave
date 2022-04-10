using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace SimplySaveWindows.DataTransfer
{
    public class WindowsConfigData
    {
        [JsonPropertyName("saveFilesDir")]
        public string SaveFilesDir { get; set; }
        [JsonPropertyName("sort")]
        public string Sort { get; set; }
        [JsonPropertyName("windowWidth")]
        public int WindowWidth { get; set; } = 1050;
        [JsonPropertyName("windowHeight")]
        public int WindowHeight { get; set; } = 620;
    }
}
