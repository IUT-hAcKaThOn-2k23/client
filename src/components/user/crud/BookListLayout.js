import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function BookListLayout() {

  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage, setBooksPerPage] = useState(10);
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/bookList").then((response) => {
      setBookList(response.data);
    });
  }, []);

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = bookList.slice(indexOfFirstBook, indexOfLastBook);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(bookList.length / booksPerPage); i++) {
    pageNumbers.push(i);
  }

  const deleteBook = (name) => {
    axios.delete(`http://localhost:3001/delete/${name}`).then((response) => {
      // update the bookList state after deleting the book
      setBookList(bookList.filter(book => book.name !== name));
    }).catch((error) => {
      console.log(error);
    });
  }

  return (
    <div>
      <h2 className="text-center text-2xl font-bold my-5">Book List</h2>
      <table className="table mx-auto my-5">
        <thead>
          <tr>
            <th scope="col" style={{marginRight:"30px"}}>#SL</th>
            <th scope="col" style={{marginRight:"30px"}}>Name</th>
            <th scope="col" style={{marginRight:"30px"}}>Author</th>
            <th scope="col" style={{marginRight:"30px"}}>Genre</th>
            <th scope="col-2" className="text-center" style={{marginRight:"30px"}}>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentBooks.map((book) => {
            return (
              <tr key={book.id}>
                <th scope="row">{book.id}</th>
                <td>{book.name}</td>
                <td>{book.author}</td>
                <td>{book.genre}</td>
                <td><NavLink to={`/${book.id}'`}><button type="button" className="btn btn-success">Update</button></NavLink></td>
                <td><button  onClick={()=> {deleteBook(book.name)}}  className="btn btn-danger">Delete</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className="container mx-auto mb-10">
        <div className="flex justify-center">
          <nav>
            <ul className="pagination">
              {pageNumbers.map((number) => (
                <li key={number} className="page-item">
                  <button onClick={() => setCurrentPage(number)} className="btn btn-outline-dark mr-2">
                    {number}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <button type="submit" className="btn btn-primary mr-4">Show more</button>
        <NavLink to="/addBook"><button type="submit" className="btn btn-info">Add more</button></NavLink>
      </div>
    </div>
  ) 
} 