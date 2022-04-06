import React from "react";
import { useRecoilValue } from "recoil";
import { cartState } from "./atoms";

const Cart = () => {
  const cart = useRecoilValue(cartState);

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
