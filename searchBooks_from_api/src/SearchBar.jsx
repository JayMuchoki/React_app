import React from 'react';

const SearchBar = ({ searchQuery, handleSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search by title..."
      value={searchQuery}
      onChange={handleSearch}
    />
  );
};

export default SearchBar;
