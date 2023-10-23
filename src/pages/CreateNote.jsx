import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import { useState } from 'react'
import {v4 as uuid} from 'uuid'
import useCreateDate from '../components/useCreateDate'

const CreateNote = ({setNotes}) => {
  const date = useCreateDate();
  const navigate = useNavigate();

  const [form, setForm] = useState({title: '', details: ''})

  const {title, details} = form;

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!title && !details) return;

    const note = {id: uuid(), title, details, date};
    setNotes(prevNotes => [note, ...prevNotes]);
    navigate('/');
  };

  return (
    <section>
      <header className="create-note__header">
        <Link to='/' className='btn'><IoIosArrowBack /> </Link>
        <button className="btn lg primary" onClick={handleSubmit} >Save</button>
      </header>
      <form action="" className='create-note__form' onSubmit={handleSubmit} >
        <input type="text" placeholder='Title' onChange={handleInputChange} value={title} name='title' autoFocus />
        <textarea rows="28" placeholder='Note details...' onChange={handleInputChange} name='details' value={details} ></textarea>
      </form>
    </section>
  )
}

export default CreateNote