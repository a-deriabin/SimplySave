using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace SimplySaveWindows.DataTransfer
{
    public class RenameNoteData
    {
        [JsonPropertyName("id")]
        public string Id { get; set; }
        [JsonPropertyName("newTitle")]
        public string NewTitle { get; set; }
    }
}
