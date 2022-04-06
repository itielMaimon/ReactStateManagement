import React from "react";
import Book from "./Book";
import { useBooks } from "./hooks/useBooks";

const BookList = () => {
  const { books } = useBooks();

  return (
    <div className="ui horizontal list">
      {books.map((_book, index) => (
        <Book key={index} index={index} />
      ))}
    </div>
  );
};

export default BookList;
