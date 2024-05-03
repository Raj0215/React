import React, { useState } from 'react';
import './AdminDashboard.css'; 

const AdminDashboard = () => {
 
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [image, setImage] = useState('');
  const [selectedBookIndex, setSelectedBookIndex] = useState(null);
  const [showAddedBookText, setShowAddedBookText] = useState(false); 


  const addBook = () => {
    const newBook = { title, author, genre, image };
    setBooks([...books, newBook]);
    setTitle('');
    setAuthor('');
    setGenre('');
    setImage('');
    setShowAddedBookText(true); 
    setTimeout(() => setShowAddedBookText(false), 3000);
  };

 
  const updateBook = () => {
    if (selectedBookIndex !== null) {
      const updatedBooks = [...books];
      updatedBooks[selectedBookIndex] = { title, author, genre, image };
      setBooks(updatedBooks);
      setSelectedBookIndex(null);
      setTitle('');
      setAuthor('');
      setGenre('');
      setImage('');
    }
  };

  
  const selectBookForUpdate = (index) => {
    setSelectedBookIndex(index);
    const bookToUpdate = books[index];
    setTitle(bookToUpdate.title);
    setAuthor(bookToUpdate.author);
    setGenre(bookToUpdate.genre);
    setImage(bookToUpdate.image);
  };

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      {showAddedBookText && <p className="added-book-text">Added Book</p>} 
      <div className="add-book">
        <h3>Add Book</h3>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          type="text"
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button onClick={addBook}>Add Book</button>
      </div>
      <div className="update-book">
        <h3>Update Book</h3>
        <select onChange={(e) => selectBookForUpdate(e.target.value)}>
          <option value="">Select a book to update</option>
          {books.map((book, index) => (
            <option key={index} value={index}>
              {book.title}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          type="text"
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button onClick={updateBook}>Update Book</button>
      </div>
      <div className="book-list">
        <h3>Books</h3>
        <ul>
          {books.map((book, index) => (
            <li key={index}>
              <img src={book.image} alt={book.title} className="book-image" />
              <strong>Title:</strong> {book.title}, <strong>Author:</strong> {book.author}, <strong>Genre:</strong> {book.genre}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
