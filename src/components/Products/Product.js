import React from "react";
import "./Product.css";

const Product = (props) => {
  // console.log(props.product);
  const { name, price, seller, ratings, img } = props.product;
  return (
    <div>
      <div className="product">
        <img src={img} alt="product" className="product-image" />
        <h4>{name}</h4>
        <p>Price: ${price}</p>
        <p>Seller: {seller}</p>
        <p>Ratings: {ratings}</p>
        <button onClick={() => props.handleAddToCart(props.product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
