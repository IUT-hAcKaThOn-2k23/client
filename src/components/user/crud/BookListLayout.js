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
    // <div>
    //   <h2 className="text-center text-2xl font-bold my-5">Book List</h2>
    //   <table class="table-auto m-10">
    //     <thead>
    //       <tr>
    //         <th scope="col" style={{marginRight:"30px"}}>#SL</th>
    //         <th scope="col" style={{marginRight:"30px"}}>Name</th>
    //         <th scope="col" style={{marginRight:"30px"}}>Author</th>
    //         <th scope="col" style={{marginRight:"30px"}}>Genre</th>
    //         <th scope="col-2" className="text-center" style={{marginRight:"30px"}}>Action</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {currentBooks.map((book) => {
    //         return (
    //           <tr key={book.id}>
    //             <th scope="row">{book.id}</th>
    //             <td>{book.name}</td>
    //             <td>{book.author}</td>
    //             <td>{book.genre}</td>
    //             <td><NavLink to={`/${book.id}'`}><button type="button" className="btn btn-success">Update</button></NavLink></td>
    //             <td><button  onClick={()=> {deleteBook(book.name)}}  className="btn btn-danger">Delete</button></td>
    //           </tr>
    //         )
    //       })}
    //        <tr>
    //   <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
    //   <td>Malcolm Lockyer</td>
    //   <td>1961</td>
    // </tr>
    // <tr>
    //   <td>Witchy Woman</td>
    //   <td>The Eagles</td>
    //   <td>1972</td>
    // </tr>
    // <tr>
    //   <td>Shining Star</td>
    //   <td>Earth, Wind, and Fire</td>
    //   <td>1975</td>
    // </tr>
    //     </tbody>
    //   </table>
    //   <div className="container mx-auto mb-10">
    //     <div className="flex justify-center">
    //       <nav>
    //         <ul className="pagination">
    //           {pageNumbers.map((number) => (
    //             <li key={number} className="page-item">
    //               <button onClick={() => setCurrentPage(number)} className="btn btn-outline-dark mr-2">
    //                 {number}
    //               </button>
    //             </li>
    //           ))}
    //         </ul>
    //       </nav>
    //     </div>
    //     <button
    //     type="button"
    //     className="w-full py-2 mt-4 rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
    //   >
    //     Show books
    //   </button>
    //     <NavLink to="/addBook"><button type="submit" className="btn btn-info">Add more</button></NavLink>
    //   </div>
    // </div>
    <div class="md:px-32 py-8 w-full">
  <div class="shadow overflow-hidden rounded border-b border-gray-200">
    <table class="min-w-full bg-white">
      <thead class="bg-gray-800 text-white">
        <tr>
          <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Name</th>
          <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Author</th>
          <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Genre</th>
        
          <th class="text-left py-3 px-4 uppercase font-semibold text-sm">
                Update
              </th>
              <th class="text-left py-3 px-4 uppercase font-semibold text-sm">
                Delete
              </th>
       
        </tr>
      </thead>
    <tbody class="text-gray-700">
      <tr>
        <td class="w-1/3 text-left py-3 px-4">Lian</td>
        <td class="w-1/3 text-left py-3 px-4">Smith</td>
        <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="tel:622322662">622322662</a></td>
        <td class="px-6 py-4">
                <NavLink href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 
                      2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                </NavLink>
              </td>
              <td class="px-6 py-4">
                <NavLink href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 text-red-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 
                      4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </NavLink>
              </td>
     
      </tr>

      <tr>
        <td class="w-1/3 text-left py-3 px-4">Lian</td>
        <td class="w-1/3 text-left py-3 px-4">Smith</td>
        <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="tel:622322662">622322662</a></td>
        <td class="px-6 py-4">
                <NavLink href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 
                      2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                </NavLink>
              </td>
              <td class="px-6 py-4">
                <NavLink href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 text-red-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 
                      4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </NavLink>
              </td>
     
      </tr>
      
    </tbody>
    </table>
  </div>
</div>
  ) 
} 