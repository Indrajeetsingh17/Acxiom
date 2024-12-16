import React, { useState } from 'react';
import axios from '../api/axios';

const UserManagementForm = () => {
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`/users/manage`, { name });
    alert('User Managed!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter User Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Manage User</button>
    </form>
  );
};

export default UserManagementForm;
