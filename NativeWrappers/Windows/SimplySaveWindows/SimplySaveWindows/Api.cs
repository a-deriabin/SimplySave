using SimplySaveWindows.DataTransfer;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SimplySaveWindows
{
    public class Api
    {
        private readonly Config config;
        private MetadataStorage metadata;
        private NotesStorage notes;

        public Api(Config config)
        {
            this.config = config;
            metadata = new MetadataStorage(config.Data.SaveFilesDir);
            notes = new NotesStorage(config.Data.SaveFilesDir);

            EnsureNoExtraFiles();
        }

        private void EnsureNoExtraFiles()
        {
            if (!Directory.Exists(config.Data.SaveFilesDir))
                return;

            foreach (var file in Directory.GetFiles(config.Data.SaveFilesDir))
            {
                if (!file.EndsWith(".ssnf"))
                    continue;
                string id = Path.GetFileNameWithoutExtension(file);
                if (!metadata.Notes.Any(x => x.Id == id))
                    throw new Exception($"Extra file {id}.ssnf in save directory. Probably corrupted metadata.");
            }
        }

        public NoteData CreateNote(CreateNoteData data)
        {
            var note = metadata.CreateNote(data.Title, data.FolderId, data.IsPrivate);
            notes.CreateNote(note.Id, data.Content);
            return note;
        }

        public IReadOnlyList<NoteData> UpdateNote(UpdateNoteData data)
        {
            metadata.NoteEdited(data.Id);
            notes.UpdateNote(data.Id, data.Content);
            return metadata.Notes;
        }

        public IReadOnlyList<NoteData> RenameNote(RenameNoteData data)
        {
            metadata.RenameNote(data);
            return metadata.Notes;
        }

        public IReadOnlyList<NoteData> SetNoteFolder(string noteId, string folderId)
        {
            metadata.SetNoteFolder(noteId, folderId);
            return metadata.Notes;
        }

        public IReadOnlyList<NoteData> DeleteNote(string noteId)
        {
            metadata.DeleteNote(noteId);
            notes.DeleteNote(noteId);
            return metadata.Notes;
        }

        public IReadOnlyList<NoteData> LoadNotes()
        {
            return metadata.Notes;
        }

        public string GetContent(string noteId)
        {
            return notes.GetContent(noteId);
        }

        public IReadOnlyList<FolderData> LoadFolders()
        {
            return metadata.Folders;
        }

        public void SetFolders(FolderData[] folders)
        {
            metadata.SetFolderData(folders);
        }

        public ConfigData LoadConfig()
        {
            return new ConfigData()
            {
                DataDirPath = config.Data.SaveFilesDir,
                Sort = config.Data.Sort
            };
        }

        public void SaveConfig(ConfigData data)
        {
            config.Data.SaveFilesDir = data.DataDirPath;
            config.Data.Sort = data.Sort;
            config.Save();

            if (config.Data.SaveFilesDir != metadata.SaveFilesDir)
                metadata = new MetadataStorage(config.Data.SaveFilesDir);
            if (config.Data.SaveFilesDir != notes.SaveFilesDir)
                notes = new NotesStorage(config.Data.SaveFilesDir);
        }

    }
}
