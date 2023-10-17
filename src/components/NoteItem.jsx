import React from 'react'
import { Link } from 'react-router-dom'

const NoteItem = ({ note, index }) => {
        const noteColor = `var(--note-color-${(index % 8) + 1})`;
    return (
        <Link to={`/edit-note/${note.id}`} className='note' style={{ background: noteColor }}>
            <h4>{note.title.length > 40 ? (note.title.substr(0, 40)) + '...' : note.title}</h4>
            <p>{note.date} </p>
        </Link>
    )
}

export default NoteItem