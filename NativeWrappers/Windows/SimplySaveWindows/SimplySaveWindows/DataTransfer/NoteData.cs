using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace SimplySaveWindows.DataTransfer
{
    public class NoteData
    {
        [JsonPropertyName("id")]
        public string Id { get; set; }
        [JsonPropertyName("title")]
        public string Title { get; set; }
        [JsonPropertyName("folderId")]
        public string FolderId { get; set; }
        [JsonPropertyName("createdTimestamp")]
        public long CreatedTimestamp { get; set; }
        [JsonPropertyName("editedTimestamp")]
        public long EditedTimestamp { get; set; }
        [JsonPropertyName("isPrivate")]
        public bool IsPrivate { get; set; }
    }
}
