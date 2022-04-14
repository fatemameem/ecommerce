import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Product.css";

const Product = (props) => {
  // console.log(props.product);
  const { name, price, seller, ratings, img } = props.product;
  return (
    <div>
      <div className="product">
        <img src={img} alt="product" className="product-image" />
        <div className="product-info">
          <p className="product-name">{name}</p>
          <p>Price: ${price}</p>
          <p>
            <small> Seller: {seller}</small>
          </p>
          <p>
            <small> Ratings: {ratings} Stars</small>
          </p>
          <button
            className="btn-cart"
            onClick={() => props.handleAddToCart(props.product)}
          >
            <p className="btn-text">Add to Cart</p>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
