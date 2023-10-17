import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom"
import Notes from '../pages/Notes'
import CreateNote from '../pages/CreateNote'
import EditNotes from '../pages/EditNotes'
/* import dummyNotes from '../dummy_notes' */


const RouterPage = () => {
    const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || [])

    useEffect(()=> {
        localStorage.setItem('notes', JSON.stringify(notes))
    },[notes])

    return (
        <div id="app">
            <Routes>
                <Route path="/" element={<Notes notes={notes} />} />
                <Route path="/create-note" element={<CreateNote setNotes={setNotes} />} />
                <Route path="/edit-note/:id" element={<EditNotes/>} />
            </Routes>
        </div>
    )
}

export default RouterPage