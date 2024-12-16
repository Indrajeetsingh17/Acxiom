// src/components/AdminDashboard.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function AdminDashboard() {
  const [books, setBooks] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch books and users (mock data or API calls can be added here)
    const fetchBooks = async () => {
      // Replace with actual API call to get books
      setBooks([
        { id: 1, name: 'Book A', author: 'Author A' },
        { id: 2, name: 'Book B', author: 'Author B' },
      ]);
    };
    const fetchUsers = async () => {
      // Replace with actual API call to get users
      setUsers([
        { id: 1, name: 'User 1', email: 'user1@example.com' },
        { id: 2, name: 'User 2', email: 'user2@example.com' },
      ]);
    };

    fetchBooks();
    fetchUsers();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Admin Dashboard</h1>
      <nav>
        <ul>
          <li><Link to="/add-book">Add Book</Link></li>
          <li><Link to="/update-book">Update Book</Link></li>
          <li><Link to="/manage-users">Manage Users</Link></li>
          <li><Link to="/manage-issues">Manage Book Issues</Link></li>
        </ul>
      </nav>

      <section>
        <h2>Books</h2>
        <table border="1" style={{ width: '100%', marginBottom: '20px' }}>
          <thead>
            <tr>
              <th>Book Name</th>
              <th>Author</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id}>
                <td>{book.name}</td>
                <td>{book.author}</td>
                <td>
                  <button>Edit</button> {/* Add an edit function */}
                  <button>Delete</button> {/* Add a delete function */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section>
        <h2>Users</h2>
        <table border="1" style={{ width: '100%', marginBottom: '20px' }}>
          <thead>
            <tr>
              <th>User Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button>Edit</button> {/* Add an edit function */}
                  <button>Delete</button> {/* Add a delete function */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section>
        <h2>Book Issues</h2>
        {/* Add a list or table to manage book issues */}
        <ul>
          <li>Book A - Issue Date: 01/01/2024 - Return Date: 01/15/2024</li>
          <li>Book B - Issue Date: 01/05/2024 - Return Date: 01/20/2024</li>
        </ul>
      </section>
    </div>
  );
}

export default AdminDashboard;
