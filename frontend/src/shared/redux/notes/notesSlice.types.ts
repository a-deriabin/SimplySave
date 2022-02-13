export type NoteType = {
    id: string,
    title: string,
    folderId: string,
    createdTimestamp: number,
    editedTimestamp: number,
    isPrivate: boolean,
}

export type FolderType = {
    id: string,
    title: string,
    icon: string,
}

export type StateType = {
    notesList: NoteType[],
    openNoteId: number | null,

    foldersList: FolderType[],
    openFolderId: number | null,

    loadState: 'idle' | 'pending' | 'success' | 'failed',
    error: string | null,
}

export type LoadedDataType = {
    notes: NoteType[],
    folders: FolderType[]
}
