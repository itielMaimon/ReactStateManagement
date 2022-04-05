import React, { useState } from "react";
import BookList from "./BookList";
import Cart from "./Cart";
import Budget from "./Budget";

const BookStore = () => {
  return (
    <>
      <Cart />
      <Budget />
      <BookList />
    </>
  );
};

export default BookStore;
