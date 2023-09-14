// import { FileFileDownload } from "material-ui/svg-icons";
import React from "react";
const FilterNotes = ({ notesArray }) => {
    console.log('needs updated');
    return (
        <>
            {notesArray.filter(notes => notes.title.toLowerCase().includes('js'))
                .map(note => <li key={note.id}>{note.title}</li>)
            }
        </>
    )
}
export default React.memo(FilterNotes);
