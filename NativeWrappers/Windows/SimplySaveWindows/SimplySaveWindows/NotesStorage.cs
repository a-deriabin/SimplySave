using System;
using System.Collections.Generic;
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
            //TODO: load from file
        }

        public void CreateNote(string id, string content)
        {
            //TODO
        }

        public void UpdateNote(string id, string content)
        {
            //TODO
        }

        public void DeleteNote(string id)
        {
            //TODO
        }

        public string GetContent(string id)
        {
            return "todo";
        }

    }
}
