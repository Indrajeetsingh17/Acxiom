import React, { useState } from 'react';

function ReturnBook() {
  const [form, setForm] = useState({
    bookName: '',
    authorName: 'Auto-Populated',
    serialNo: '',
    issueDate: 'Auto-Populated',
    returnDate: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.bookName || !form.serialNo || !form.returnDate) {
      alert('All fields are mandatory!');
    } else {
      console.log('Return book details submitted:', form);
      // Navigate to Pay Fine Page
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name of Book:</label>
      <input type="text" value={form.bookName} onChange={(e) => setForm({ ...form, bookName: e.target.value })} required />

      <label>Author Name:</label>
      <input type="text" value={form.authorName} disabled />

      <label>Serial No:</label>
      <input type="text" value={form.serialNo} onChange={(e) => setForm({ ...form, serialNo: e.target.value })} required />

      <label>Issue Date:</label>
      <input type="text" value={form.issueDate} disabled />

      <label>Return Date:</label>
      <input type="date" value={form.returnDate} onChange={(e) => setForm({ ...form, returnDate: e.target.value })} required />

      <button type="submit">Confirm Return</button>
    </form>
  );
}

export default ReturnBook;
