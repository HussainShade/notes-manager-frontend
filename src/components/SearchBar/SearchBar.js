import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ setSearchParams }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const handleSearch = () => {
    setSearchParams({ title, category });
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Others">Others</option>
      </select>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
