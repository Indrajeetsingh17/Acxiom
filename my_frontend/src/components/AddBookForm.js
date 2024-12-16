// src/components/AddBook.js
import React, { useState } from 'react';

function AddBook() {
  const [book, setBook] = useState({
    name: '',
    author: '',
    genre: '',
    publishedDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to add the book (API call)
    console.log('Book Added:', book);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Book</h2>
      <label>Name:</label>
      <input type="text" name="name" value={book.name} onChange={handleChange} required />

      <label>Author:</label>
      <input type="text" name="author" value={book.author} onChange={handleChange} required />

      <label>Genre:</label>
      <input type="text" name="genre" value={book.genre} onChange={handleChange} required />

      <label>Published Date:</label>
      <input type="date" name="publishedDate" value={book.publishedDate} onChange={handleChange} required />

      <button type="submit">Add Book</button>
    </form>
  );
}

export default AddBook;
