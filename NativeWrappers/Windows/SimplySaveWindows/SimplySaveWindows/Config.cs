using SimplySaveWindows.DataTransfer;
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

        public WindowsConfigData Data { get; set; }

        public Config()
        {
            if (!File.Exists(ConfigDir))
            {
                Data = new WindowsConfigData()
                {
                    SaveFilesDir = "./SavedNotes",
                    Sort = "alphabet"
                };
                Save();
                return;
            }

            using var sr = new StreamReader(ConfigDir);
            string json = sr.ReadToEnd();

            Data = JsonSerializer.Deserialize(json, typeof(WindowsConfigData)) as WindowsConfigData;
        }

        public void Save()
        {
            using var sw = new StreamWriter(ConfigDir);
            string json = JsonSerializer.Serialize(Data);
            sw.WriteLine(json);
        }

    }
}
