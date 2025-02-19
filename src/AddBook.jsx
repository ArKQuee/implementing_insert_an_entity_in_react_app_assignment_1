import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddBook.css"; // Import the CSS file for styling

const AddBook = () => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    description: "",
    coverImage: "",
  });

  const navigate = useNavigate(); // React Router hook for navigation

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Book added:", book); // This is just for testing
    navigate("/"); // Navigate back to home after submitting
  };

  return (
    <div className="add-book-container">
      <h2>Add a New Book</h2>
      <form className="add-book-form" onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" name="title" value={book.title} onChange={handleChange} required />

        <label>Author:</label>
        <input type="text" name="author" value={book.author} onChange={handleChange} required />

        <label>Description:</label>
        <textarea name="description" value={book.description} onChange={handleChange} required />

        <label>Cover Image URL:</label>
        <input type="url" name="coverImage" value={book.coverImage} onChange={handleChange} required />

        <button type="submit" className="submit-button">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
