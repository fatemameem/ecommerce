import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Products/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  // console.log(products);
  const addToCart = (product) => {
    console.log(product);
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <div>
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          handleAddToCart={addToCart}
        ></Product>
      ))}
      <Cart cart={cart}></Cart>
    </div>
  );
};
export default Shop;
