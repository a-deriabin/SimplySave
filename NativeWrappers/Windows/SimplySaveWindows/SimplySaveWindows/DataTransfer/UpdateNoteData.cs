using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace SimplySaveWindows.DataTransfer
{
    public class UpdateNoteData
    {
        [JsonPropertyName("id")]
        public string Id { get; set; }
        [JsonPropertyName("content")]
        public string Content { get; set; }
    }
}
