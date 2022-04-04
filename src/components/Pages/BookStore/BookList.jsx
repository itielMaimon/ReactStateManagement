import React, { useState, useEffect } from "react";
import Book from "./Book";

const BookList = ({ books, addCart }) => {
  return (
    <div className="ui horizontal list">
      {books.map((book, index) => (
        <Book
          key={index}
          name={book.name}
          price={book.price}
          addCart={addCart}
          index={index}
        />
      ))}
    </div>
  );
};

export default BookList;
