import React from "react";
import { Routes, Route } from "react-router-dom"
import Notes from '../pages/Notes'
import CreateNote from '../pages/CreateNote'
import EditNotes from '../pages/EditNotes'
import dummyNotes from '../dummy_notes'
import { useState } from "react";

const RouterPage = () => {
    const [notes, setNotes] = useState(dummyNotes)

    return (
        <div id="app">
            <Routes>
                <Route path="/" element={<Notes notes={notes} />} />
                <Route path="/create-note" element={<CreateNote/>} />
                <Route path="/edit-note/:id" element={<EditNotes/>} />
            </Routes>
        </div>
    )
}

export default RouterPage