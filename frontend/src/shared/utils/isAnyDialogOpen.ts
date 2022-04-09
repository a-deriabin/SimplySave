export default function isAnyDialogOpen() : boolean {
    return document.getElementsByClassName('dialogParent').length > 0
}
