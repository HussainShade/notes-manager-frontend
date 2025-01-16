import React from 'react';
import './List.css';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';

const List = ({ notes, onEdit, onDelete }) => {
  return (
    <div className="list-grid">
      {notes.map((note) => (
        <div className="list-card" key={note.id}>
          <h3 className="list-title">{note.title}</h3>
          <p className="list-description">{note.description}</p>
          <p className="list-category">{note.category}</p>
          <div className="list-actions">
            <AiFillEdit className="icon edit-icon" onClick={() => onEdit(note)} />
            <AiFillDelete className="icon delete-icon" onClick={() => onDelete(note.id)} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
