import React, { useState, useEffect } from 'react';
import NoteList from './components/NoteList/NoteList';
import NoteForm from './components/NoteForm/NoteForm';
import SearchBar from './components/SearchBar/SearchBar';
import './App.css';
import axios from 'axios';

function App() {
  const [notes, setNotes] = useState([]);
  const [searchParams, setSearchParams] = useState({ title: '', category: '' });
  const [selectedNote, setSelectedNote] = useState(null);

  const fetchNotes = async () => {
    const response = await axios.get('https://notes-manager-backend-1.onrender.com/notes', {
      params: searchParams,
    });
    setNotes(response.data);
  };

  useEffect(() => {
    fetchNotes();
  });

  return (
    <div className="app-container">
      <h1>Personal Notes Manager</h1>
      <SearchBar setSearchParams={setSearchParams} />
      <NoteForm selectedNote={selectedNote} setSelectedNote={setSelectedNote} fetchNotes={fetchNotes} />
      <NoteList notes={notes} setNotes={setNotes} setSelectedNote={setSelectedNote} searchParams={searchParams} />
    </div>
  );
}

export default App;
