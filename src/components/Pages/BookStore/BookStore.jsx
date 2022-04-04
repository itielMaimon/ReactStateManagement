import React, { useState } from "react";
import BookList from "./BookList";
import Cart from "./Cart";
import Budget from "./Budget";

const BookStore = () => {
  const [cart, setCart] = useState([]);
  const [budget, setBudget] = useState(100);
  const [books] = useState([
    { name: "Harry Potter", price: 10 },
    { name: "Game of Thrones", price: 15 },
    { name: "War and Peace", price: 20 },
    { name: "Hamlet", price: 23 },
  ]);

  const addCart = (index) => {
    setCart((prevCart) => [...prevCart, books[index]]);
    setBudget((prevBudget) => prevBudget - books[index].price);
  };

  return (
    <>
      <Cart cart={cart} />
      <Budget budget={budget} />
      <BookList books={books} addCart={addCart} />
    </>
  );
};

export default BookStore;
