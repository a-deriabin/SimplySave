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
        private readonly Form1 form;

        public InteropObject(Api api, Form1 form)
        {
            this.api = api;
            this.form = form;
        }

        public string CreateNote(string json)
        {
            var data = JsonSerializer.Deserialize(json, typeof(CreateNoteData)) as CreateNoteData;
            var newNote = api.CreateNote(data);
            return JsonSerializer.Serialize(newNote);
        }

        public string SaveNote(string json)
        {
            var data = JsonSerializer.Deserialize(json, typeof(UpdateNoteData)) as UpdateNoteData;
            var newNotesData = api.UpdateNote(data);
            return JsonSerializer.Serialize(newNotesData);
        }

        public string RenameNote(string json)
        {
            var data = JsonSerializer.Deserialize(json, typeof(RenameNoteData)) as RenameNoteData;
            var newNotesData = api.RenameNote(data);
            return JsonSerializer.Serialize(newNotesData);
        }

        public string SetNoteFolder(string noteId, string folderId)
        {
            var newNotesData = api.SetNoteFolder(noteId, folderId);
            return JsonSerializer.Serialize(newNotesData);
        }

        public string DeleteNote(string noteId)
        {
            var newNotesData = api.DeleteNote(noteId);
            return JsonSerializer.Serialize(newNotesData);
        }

        public string LoadNotes()
        {
            return JsonSerializer.Serialize(api.LoadNotes());
        }

        public string LoadFolders()
        {
            return JsonSerializer.Serialize(api.LoadFolders());
        }

        public string LoadContent(string noteId)
        {
            return api.GetContent(noteId);
        }

        public void SetFolders(string json)
        {
            var data = JsonSerializer.Deserialize(json, typeof(FolderData[])) as FolderData[];
            api.SetFolders(data);
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
            return form.OpenFolderDialog();
        }

    }
}
