import React from "react";

const Book = ({ name, price, addCart, index }) => {
  return (
    <div className="ui card item">
      <img
        className="ui image"
        src="https://images.unsplash.com/photo-1519764340700-3db40311f21e?fit=crop&w=280&q=200"
        alt=""
      ></img>
      <h1>{name}</h1>
      <h3>{price}$</h3>
      <button onClick={() => addCart(index)}>Add to cart</button>
    </div>
  );
};

export default Book;
