using SimplySaveWindows.DataTransfer;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace SimplySaveWindows
{
    public class InteropObject
    {
        private readonly Api api;

        public InteropObject(Api api)
        {
            this.api = api;
        }

        public string CreateNote(string json)
        {
            return null;
        }

        public string SaveNote(string json)
        {
            return null;
        }

        public string RenameNote(string json)
        {
            return null;
        }

        public string SetNoteFolder(string json)
        {
            return null;
        }

        public string DeleteNote(string id)
        {
            return null;
        }

        public string LoadNotes()
        {
            return null;
        }

        public string LoadContent(string noteId)
        {
            return null;
        }

        public string SetFolders(string json)
        {
            return null;
        }

        public string LoadConfig()
        {
            return JsonSerializer.Serialize(api.LoadConfig());
        }

        public string SaveConfig(string json)
        {
            var data = JsonSerializer.Deserialize(json, typeof(ConfigData)) as ConfigData;
            api.SaveConfig(data);
            return json;
        }

        public string ShowFolderDialog()
        {
            return null;
        }

    }
}
