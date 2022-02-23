export type NoteType = {
    id: string,
    title: string,
    folderId: string,
    createdTimestamp: number,
    editedTimestamp: number,
    isPrivate: boolean,
}

export type CreateNoteType = {
    title: string,
    folderId: string,
    password: string | null,
}

export type FolderType = {
    id: string,
    title: string,
    icon: string,
}

export type StateType = {
    notesList: NoteType[],
    openNoteId: string | null,

    foldersList: FolderType[],
    openFolderId: string | null,

    searchStr: string,

    loadStatus: 'idle' | 'pending' | 'success' | 'failed',
    createStatus: 'idle' | 'pending' | 'success' | 'failed',
    error: string | null,
}

export type LoadedDataType = {
    notes: NoteType[],
    folders: FolderType[]
}
