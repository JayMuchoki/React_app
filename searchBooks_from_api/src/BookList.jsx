import React from 'react';

const BookList = ({ books, loading }) => {
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
