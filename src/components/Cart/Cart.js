import React from "react";
import "./Cart.css";

const Cart = (props) => {
  return (
    <div>
      <p>{props.cart.length}</p>
    </div>
  );
};

export default Cart;
