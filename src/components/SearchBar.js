import React, { useEffect, useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    setQuery('');
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleClear = (e) => {
    setQuery('');
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center h-[30%] w-[60%] mb-4"
    >
      <input
        type="text"
        value={query}
        onChange={handleChange}
        className="w-[100%] h-[3rem] bg-white bg-opacity-60 text-orange-800 px-4 rounded-xl placeholder:text-orange-800"
        placeholder="Search for recipes..."
      />
      <button
        type="submit"
        className="bg-amber-500 w-[30%] text-white ml-2 p-2 text-lg rounded-lg"
      >
        Search
      </button>
      {query ? (
        <button
          onClick={() => handleClear()}
          className="bg-amber-800 w-[30%] text-white ml-2 p-2 text-lg rounded-lg"
        >
          Clear
        </button>
      ) : (
        <></>
      )}
    </form>
  );
};

export default SearchBar;
