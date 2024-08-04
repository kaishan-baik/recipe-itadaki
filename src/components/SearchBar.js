import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center space-x-4">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search for recipes..."
        className="p-2 border rounded-lg flex-1"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
