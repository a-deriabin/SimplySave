using SimplySaveWindows.DataTransfer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
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

        public MetadataStorage(string saveFilesDir)
        {
            SaveFilesDir = saveFilesDir;
            //TODO: load from file
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
            SaveNotesData();
            return note;
        }

        public void NoteEdited(string id)
        {
            var note = notes.Find(x => x.Id == id);
            note.EditedTimestamp = DateTimeOffset.Now.ToUnixTimeMilliseconds();
            SaveNotesData();
        }
        
        public void RenameNote(RenameNoteData data)
        {
            var note = notes.Find(x => x.Id == data.Id);
            note.Title = data.NewTitle;
            SaveNotesData();
        }

        public void DeleteNote(string id)
        {
            int index = notes.FindIndex(x => x.Id == id);
            notes.RemoveAt(index);
            SaveNotesData();
        }

        public void SetNoteFolder(string id, string newFolderId)
        {
            var note = notes.Find(x => x.Id == id);
            note.FolderId = newFolderId;
            SaveNotesData();
        }

        private void SaveNotesData()
        {
            //TODO
        }

        public void SetFolderData(FolderData[] newFolders)
        {
            folders.Clear();
            folders.AddRange(newFolders);
            //TODO: save to file
        }

    }
}
