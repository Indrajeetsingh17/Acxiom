import React, { useState } from 'react';

function AddMembership() {
  const [duration, setDuration] = useState('6');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Membership added for ${duration} months.`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Membership Duration:</label>
      <select value={duration} onChange={(e) => setDuration(e.target.value)}>
        <option value="6">6 Months</option>
        <option value="12">1 Year</option>
        <option value="24">2 Years</option>
      </select>

      <button type="submit">Add Membership</button>
    </form>
  );
}

export default AddMembership;
