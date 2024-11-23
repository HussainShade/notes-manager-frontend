import React from 'react';
import './NoteList.css';
import axios from 'axios';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';

const NoteList = ({ notes, setSelectedNote, setNotes }) => {
  const handleEdit = (note) => {
    setSelectedNote(note);
  };

  const handleDelete = async (id) => {
    await axios.delete(`https://notes-manager-backend-1.onrender.com/notes/${id}`);
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div className="note-list">
      {notes.map(note => (
        <div className="note-card" key={note.id}>
          <h3 className='list-text'>{note.title}</h3>
          <p className='list-text'>{note.description}</p>
          <p className="category">{note.category}</p>
          <div className="note-actions">
            <AiFillEdit className="icon edit-icon" onClick={() => handleEdit(note)} />
            <AiFillDelete className="icon delete-icon" onClick={() => handleDelete(note.id)} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
