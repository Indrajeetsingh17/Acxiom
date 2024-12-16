import React, { useState } from 'react';

function FinePayment() {
  const [finePaid, setFinePaid] = useState(false);
  const [remarks, setRemarks] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!finePaid) {
      alert('Please confirm the fine payment.');
    } else {
      console.log('Fine payment confirmed with remarks:', remarks);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Fine Paid:</label>
      <input type="checkbox" checked={finePaid} onChange={(e) => setFinePaid(e.target.checked)} />
      
      <label>Remarks (Optional):</label>
      <textarea value={remarks} onChange={(e) => setRemarks(e.target.value)} />

      <button type="submit">Submit Fine</button>
    </form>
  );
}

export default FinePayment;
