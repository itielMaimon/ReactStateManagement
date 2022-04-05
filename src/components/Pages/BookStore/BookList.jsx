import React, { useState } from "react";
import Book from "./Book";

const BookList = () => {
  const [books] = useState([
    { name: "Harry Potter", price: 10 },
    { name: "Game of Thrones", price: 15 },
    { name: "War and Peace", price: 20 },
    { name: "Hamlet", price: 23 },
  ]);

  return (
    <div className="ui horizontal list">
      {books.map((book, index) => (
        <Book
          key={index}
          name={book.name}
          price={book.price}
          addCart={() => {}}
          index={index}
        />
      ))}
    </div>
  );
};

export default BookList;
