import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { booksState } from "./atoms";
import { addToCartState } from "./selectors";

const Book = ({ index }) => {
  const books = useRecoilValue(booksState);
  const addToCart = useSetRecoilState(addToCartState);

  const book = books[index];

  return (
    <div className="ui card item">
      <img
        className="ui image"
        src="https://images.unsplash.com/photo-1519764340700-3db40311f21e?fit=crop&w=280&q=200"
        alt=""
      ></img>
      <h1>{book.name}</h1>
      <h3>{book.price}$</h3>
      <button onClick={() => addToCart(book)}>Add to cart</button>
    </div>
  );
};

export default Book;
