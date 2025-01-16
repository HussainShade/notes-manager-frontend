import React, { useEffect, useCallback } from 'react';
import './NoteList.css';
import axios from 'axios';
import List from '../List/List';

const NoteList = ({ notes, setNotes, setSelectedNote }) => {
  // Fetch notes with useCallback to prevent re-creation
  const fetchNotes = useCallback(async () => {
    try {
      const response = await axios.get('https://notes-manager-backend-1.onrender.com/notes');
      setNotes(response.data);
    } catch (error) {
      console.error('Error fetching notes:', error.message);
    }
  }, [setNotes]);

  // Delete a note and refresh the list
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://notes-manager-backend-1.onrender.com/notes/${id}`);
      await fetchNotes();
    } catch (error) {
      console.error('Error deleting note:', error.message);
    }
  };

  // Fetch notes on component mount
  useEffect(() => {
    fetchNotes();
  }, [fetchNotes]);

  return (
    <div className="note-list-container">
      <List notes={notes} onEdit={setSelectedNote} onDelete={handleDelete} />
    </div>
  );
};

export default NoteList;
