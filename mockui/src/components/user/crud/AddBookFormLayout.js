import axios from "axios";
import React, { useState } from "react";

import { NavLink } from "react-router-dom";
export default function AddBookFormLayout() {


  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [nameError, setNameError] = useState("");
  const [authorError, setAuthorError] = useState("");
  const [genreError, setGenreError] = useState("");
  const [bookList, setBookList] = useState([]);

  const addBook = () => {
    axios
      .post("http://localhost:3001/insert", {
        name: name,
        author: author,
        genre: genre,
      })
      .then(() => {
        alert("Successfully added to database");
      });

    setBookList([...bookList, { name: name, author: author, genre: genre }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let nameRegex = /^[a-zA-Z]+$/;

    let isFormValid = true;

    if (!name) {
      setNameError("Please enter a name");
      isFormValid = false;
    } else if (!nameRegex.test(name)) {
      setNameError(
        "Please enter a valid name with a combination of A-Z and a-z."
      );
      isFormValid = false;
    } else {
      setNameError("");
    }

    if (!author) {
      setAuthorError("Please enter an author name");
      isFormValid = false;
    } else {
      let authorWords = author.split(" ");
      if (authorWords.length < 2) {
        setAuthorError("Please enter at least two words for author");
        isFormValid = false;
      } else {
        setAuthorError("");
      }
    }

    if (!genre) {
      setGenreError("Please select a genre");
      isFormValid = false;
    } else {
      setGenreError("");
    }

    // Validate form inputs
    if (isFormValid) {
      console.log("Form submitted");
      console.log(e);
      addBook(); // Call the function to submit the data to the database
    } else {
      console.log("Please fill out all fields");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 gap-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <div className="text-red-500">{nameError}</div>
          </div>

          <div className="mb-4">
            <label className="block font-bold mb-2" htmlFor="author">
              Author
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="author"
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
            <div className="text-red-500">{authorError}</div>
          </div>

          <div class="row mb-3">
            <label for="inputEmail3" class="col-sm-2 col-form-label">
              Genre :
            </label>
            <div class="col-sm-10">
              <select
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                style={{ width: "100%", height: "100%" }}
              >
                <option value="fiction">Fiction</option>
                <option value="novel">Novel</option>
                <option value="non-fiction">Non-fiction</option>
              </select>
              <div className="text-danger">{genreError}</div>
            </div>
          </div>
          <div className="button" style={{ textAlign: "center" }}>
          <button
          type="submit"
          onClick={handleSubmit}
          className="w-full py-2 mt-4 rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
        >
          Add
        </button>
          </div>
        </form>

        <NavLink to="/bookList">
      <button
        type="button"
        className="w-full py-2 mt-4 rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
      >
        Show books
      </button>
    </NavLink>
      </div>
    </div>
  );
}

