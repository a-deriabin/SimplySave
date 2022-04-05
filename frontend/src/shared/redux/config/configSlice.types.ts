export type NotesSortType = 'alphabet' | 'create-date' |
    'create-date-desc' | 'edit-date' | 'edit-date-desc'

export type ConfigDataType = {
    dataDirPath: string,
    notesSort: NotesSortType,
}

export type ConfigStateType = {
    error: string | null,
} & ConfigDataType
