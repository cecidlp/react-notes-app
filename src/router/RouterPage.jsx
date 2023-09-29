import React from "react";
import { Routes, Route } from "react-router-dom"
import Notes from '../pages/Notes'
import CreateNote from '../pages/CreateNote'
import EditNotes from '../pages/EditNotes'

const RouterPage = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Notes/>} />
                <Route path="/create-note" element={<CreateNote/>} />
                <Route path="/edit-note/:id" element={<EditNotes/>} />
            </Routes>
        </div>
    )
}

export default RouterPage