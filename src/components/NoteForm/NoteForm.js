import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './NoteForm.css';

const NoteForm = ({ selectedNote, setSelectedNote, fetchNotes }) => {
  const [form, setForm] = useState({ title: '', description: '', category: 'Others' });

  useEffect(() => {
    if (selectedNote) {
      setForm({
        title: selectedNote.title,
        description: selectedNote.description,
        category: selectedNote.category,
      });
    }
  }, [selectedNote]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedNote) {
      await axios.put(`https://notes-manager-backend-1.onrender.com/notes/${selectedNote.id}`, form);
    } else {
      await axios.post('https://notes-manager-backend-1.onrender.com/notes', form);
    }
    setForm({ title: '', description: '', category: 'Others' });
    setSelectedNote(null);
    fetchNotes();
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        required
      />
      <textarea
        placeholder="Description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
        required
      />
      <select
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
      >
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Others">Others</option>
      </select>
      <button type="submit">{selectedNote ? 'Update' : 'Add'} Note</button>
    </form>
  );
};

export default NoteForm;
