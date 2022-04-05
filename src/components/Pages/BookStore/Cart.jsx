import React, { useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (index) => {
    // setCart((prevCart) => [...prevCart, books[index]]);
    // setBudget((prevBudget) => prevBudget - books[index].price);
  };

  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "#ffcc91",
      }}
    >
      <i className="shopping cart icon"></i>
      <h3 style={{ display: "inline" }}>Cart: {cart.length}</h3>
    </div>
  );
};

export default Cart;
