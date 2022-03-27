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
    password: string,
}

export type SaveNoteType = {
    id: string,
    content: string,
    password: string | null,
}

export type FolderType = {
    id: string,
    title: string,
    icon: string,
}

type StateStatusType = 'idle' | 'pending' | 'success' | 'failed'

export type StateType = {
    notesList: NoteType[],
    openNoteId: string | null,
    openContent: string | null,
    isEditingNote: boolean,

    foldersList: FolderType[],
    openFolderId: string | null,

    searchStr: string,

    loadStatus: StateStatusType,
    contentLoadStatus: StateStatusType,
    createStatus: StateStatusType,
    saveNoteStatus: StateStatusType,
    error: string | null,
}

export type LoadedDataType = {
    notes: NoteType[],
    folders: FolderType[]
}
