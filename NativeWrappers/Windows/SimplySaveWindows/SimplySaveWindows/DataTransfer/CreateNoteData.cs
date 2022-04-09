using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace SimplySaveWindows.DataTransfer
{
    public class CreateNoteData
    {
        [JsonPropertyName("title")]
        public string Title { get; set; }
        [JsonPropertyName("folderId")]
        public string FolderId { get; set; }
        [JsonPropertyName("isPrivate")]
        public bool IsPrivate { get; set; }
        [JsonPropertyName("content")]
        public string Content { get; set; }
    }
}
