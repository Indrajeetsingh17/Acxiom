import React, { useState } from 'react';

function UserManagement() {
  const [form, setForm] = useState({
    userType: 'new', // Default value
    name: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name) {
      alert('Name is mandatory! Please enter a name.');
    } else {
      console.log('User Details Submitted:', form);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>User Type:</label>
      <select value={form.userType} onChange={(e) => setForm({ ...form, userType: e.target.value })}>
        <option value="new">New</option>
        <option value="existing">Existing</option>
      </select>

      <label>Name:</label>
      <input
        type="text"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        required
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default UserManagement;
