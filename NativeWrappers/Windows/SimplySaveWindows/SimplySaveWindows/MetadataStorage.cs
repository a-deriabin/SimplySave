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
    public class MetadataStorage
    {
        private readonly List<NoteData> notes = new();
        private readonly List<FolderData> folders = new();

        public IReadOnlyList<NoteData> Notes { get => notes; }
        public IReadOnlyList<FolderData> Folders { get => folders; }

        public string SaveFilesDir { get; private set; }

        private const string FILE_NAME = "metadata.json";
        private string FullSaveFilePath { get => Path.Combine(SaveFilesDir, FILE_NAME); }

        public MetadataStorage(string saveFilesDir)
        {
            SaveFilesDir = saveFilesDir;

            if (File.Exists(FullSaveFilePath))
            {
                using var sr = new StreamReader(FullSaveFilePath);
                string json = sr.ReadToEnd();
                var data = JsonSerializer.Deserialize(json, typeof(MetaData)) as MetaData;
                notes.AddRange(data.Notes);
                folders.AddRange(data.Folders);
            }
        }

        public NoteData CreateNote(string title, string folderId, bool isPrivate)
        {
            int maxId = notes.Count == 0 ? -1 : notes.Max(x => Convert.ToInt32(x.Id));

            var note = new NoteData()
            {
                Id = (maxId + 1).ToString(),
                Title = title,
                FolderId = folderId,
                CreatedTimestamp = DateTimeOffset.Now.ToUnixTimeMilliseconds(),
                EditedTimestamp = DateTimeOffset.Now.ToUnixTimeMilliseconds(),
                IsPrivate = isPrivate
            };
            notes.Add(note);
            SaveData();
            return note;
        }

        public void NoteEdited(string id)
        {
            var note = notes.Find(x => x.Id == id);
            note.EditedTimestamp = DateTimeOffset.Now.ToUnixTimeMilliseconds();
            SaveData();
        }
        
        public void RenameNote(RenameNoteData data)
        {
            var note = notes.Find(x => x.Id == data.Id);
            note.Title = data.NewTitle;
            SaveData();
        }

        public void DeleteNote(string id)
        {
            int index = notes.FindIndex(x => x.Id == id);
            notes.RemoveAt(index);
            SaveData();
        }

        public void SetNoteFolder(string id, string newFolderId)
        {
            var note = notes.Find(x => x.Id == id);
            note.FolderId = newFolderId;
            SaveData();
        }

        private void SaveData()
        {
            if (!Directory.Exists(SaveFilesDir))
                Directory.CreateDirectory(SaveFilesDir);

            using var sw = new StreamWriter(FullSaveFilePath);
            string json = JsonSerializer.Serialize(new MetaData()
            {
                Notes = notes,
                Folders = folders
            });
            sw.WriteLine(json);
        }

        public void SetFolderData(FolderData[] newFolders)
        {
            folders.Clear();
            folders.AddRange(newFolders);
            SaveData();
        }

    }
}
