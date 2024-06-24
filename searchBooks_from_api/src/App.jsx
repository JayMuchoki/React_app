import React, { useState, useEffect } from 'react';
import { getAll } from './api';
import BookList from './BookList';
import SearchBar from './SearchBar';

const App = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchBooks = async () => {
      const booksFromAPI = await getAll();
      setBooks(booksFromAPI);
      setLoading(false);
    };

    fetchBooks();
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1>Book List</h1>
      <SearchBar searchQuery={searchQuery} handleSearch={handleSearch} />
      <BookList books={filteredBooks} loading={loading} />
    </div>
  );
};

export default App;
