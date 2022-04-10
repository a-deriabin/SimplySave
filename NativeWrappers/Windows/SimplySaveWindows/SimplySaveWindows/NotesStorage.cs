using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SimplySaveWindows
{
    public class NotesStorage
    {
        public string SaveFilesDir { get; private set; }

        public NotesStorage(string saveFilesDir)
        {
            SaveFilesDir = saveFilesDir;
        }

        public void CreateNote(string id, string content)
        {
            if (!Directory.Exists(SaveFilesDir))
                Directory.CreateDirectory(SaveFilesDir);

            string fullPath = Path.Combine(SaveFilesDir, $"{id}.ssnf");
            if (File.Exists(fullPath))
                throw new Exception($"Note with id {id} already exists! Probably, corrupted metadata.");

            using var sw = new StreamWriter(fullPath);
            sw.Write(content);
        }

        public void UpdateNote(string id, string content)
        {
            if (!Directory.Exists(SaveFilesDir))
                Directory.CreateDirectory(SaveFilesDir);

            string fullPath = Path.Combine(SaveFilesDir, $"{id}.ssnf");
            using var sw = new StreamWriter(fullPath);
            sw.Write(content);
        }

        public void DeleteNote(string id)
        {
            if (!Directory.Exists(SaveFilesDir))
                return;

            string fullPath = Path.Combine(SaveFilesDir, $"{id}.ssnf");
            if (File.Exists(fullPath))
                File.Delete(fullPath);
        }

        public string GetContent(string id)
        {
            string fullPath = Path.Combine(SaveFilesDir, $"{id}.ssnf");
            using var sr = new StreamReader(fullPath);
            return sr.ReadToEnd();
        }

    }
}
