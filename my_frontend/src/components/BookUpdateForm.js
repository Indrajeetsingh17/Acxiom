import React, { useState } from 'react';

function UpdateBook() {
  const [form, setForm] = useState({
    option: 'book', // Default value
    bookName: '',
    author: '',
    serialNo: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { bookName, author, serialNo } = form;

    if (!bookName || !author || !serialNo) {
      alert('All fields are mandatory! Please fill out all the details.');
    } else {
      console.log('Book Updated:', form);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Select Option:</label>
      <select value={form.option} onChange={(e) => setForm({ ...form, option: e.target.value })}>
        <option value="book">Book</option>
        <option value="movie">Movie</option>
      </select>

      <label>Name of Book:</label>
      <input
        type="text"
        value={form.bookName}
        onChange={(e) => setForm({ ...form, bookName: e.target.value })}
        required
      />

      <label>Author:</label>
      <input
        type="text"
        value={form.author}
        onChange={(e) => setForm({ ...form, author: e.target.value })}
        required
      />

      <label>Serial Number:</label>
      <input
        type="text"
        value={form.serialNo}
        onChange={(e) => setForm({ ...form, serialNo: e.target.value })}
        required
      />

      <button type="submit">Update Book</button>
    </form>
  );
}

export default UpdateBook;
