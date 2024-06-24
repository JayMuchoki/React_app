const api = "https://reactnd-books-api.udacity.com";

let token = localStorage.token;
if (!token) {
  token = localStorage.token = Math.random().toString(36).substr(-8);
}

const headers = {
  'Accept': 'application/json',
  'Authorization': token
};

const checkResponse = async (res) => {
  const contentType = res.headers.get('content-type');
  if (contentType && contentType.includes('application/json')) {
    return res.json();
  } else {
    const text = await res.text();
    throw new Error(text);
  }
};

export const get = () =>
  fetch(`${api}/status`, { headers })
    .then(checkResponse)
    .catch(error => {
      console.error('Error fetching status:', error);
      return { status: 'Error fetching status' }; // Default status message on error
    });

export const getBook = (bookId) =>
  fetch(`${api}/books/${bookId}`, { headers })
    .then(checkResponse)
    .then(data => data.book)
    .catch(error => {
      console.error('Error fetching book:', error);
      return null;
    });

export const getAll = () =>
  fetch(`${api}/books`, { headers })
    .then(checkResponse)
    .then(data => data.books)
    .catch(error => {
      console.error('Error fetching all books:', error);
      return [];
    });

export const updateBook = (book, shelf) =>
  fetch(`${api}/books/${book.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ shelf })
  }).then(checkResponse)
    .catch(error => {
      console.error('Error updating book:', error);
      return null;
  });

export const searchBooks = (query) =>
  fetch(`${api}/search`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query })
  }).then(checkResponse)
    .then(data => data.books || [])
    .catch(error => {
      console.error('Error searching books:', error);
      return [];
    });
