import React from "react";

const Cart = ({ cart }) => {
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
