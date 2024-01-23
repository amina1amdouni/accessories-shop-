// src/componenets/SearchBar.js
import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Pass the search query to the parent component
    onSearch(searchQuery);
  };

  return (
    <div className="nav-item" active-color="black">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
