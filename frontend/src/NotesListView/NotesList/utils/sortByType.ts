import {NoteType} from "../../../shared/redux/notes/notesSlice.types";
import {NotesSortType} from "../../../shared/redux/config/configSlice.types";

function cmp(a: any, b: any) {
    return a > b ? 1 : a < b ? -1 : 0
}

function getSortFunc(sortType: NotesSortType) {
    switch (sortType) {
        case 'alphabet':
            return (a: NoteType, b: NoteType) => cmp(a.title.toLowerCase(), b.title.toLowerCase())
        case "create-date":
            return (a: NoteType, b: NoteType) => cmp(a.createdTimestamp, b.createdTimestamp)
        case 'create-date-desc':
            return (a: NoteType, b: NoteType) => cmp(b.createdTimestamp, a.createdTimestamp)
        case 'edit-date':
            return (a: NoteType, b: NoteType) => cmp(a.editedTimestamp, b.editedTimestamp)
        case "edit-date-desc":
            return (a: NoteType, b: NoteType) => cmp(b.editedTimestamp, a.editedTimestamp)
        default:
            throw new Error('Unhandled sort type: ' + sortType)
    }
}

export function sortByType(list: NoteType[], sortType: NotesSortType) {
    const sortFn = getSortFunc(sortType)
    return [...list].sort(sortFn)
}
