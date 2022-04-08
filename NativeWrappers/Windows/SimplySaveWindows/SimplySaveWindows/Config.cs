using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace SimplySaveWindows
{
    public class Config
    {
        public readonly string ConfigDir = "./config.json";

        public string SaveFilesDir { get; set; }
        public string Sort { get; set; }

        public void Load()
        {
            if (!File.Exists(ConfigDir))
            {
                SaveFilesDir = "./SavedNotes";
                Sort = "alphabet";
                Save();
                return;
            }

            using var sr = new StreamReader(ConfigDir);
            string json = sr.ReadToEnd();
            var parsed = JsonDocument.Parse(json);
            SaveFilesDir = parsed.RootElement.GetProperty("saveFilesDir").GetString();
            Sort = parsed.RootElement.GetProperty("sort").GetString();
        }

        public void Save()
        {
            using var sw = new StreamWriter(ConfigDir);
            string json = JsonSerializer.Serialize(new
            {
                saveFilesDir = SaveFilesDir,
                sort = Sort
            });
            sw.WriteLine(json);
        }

    }
}
