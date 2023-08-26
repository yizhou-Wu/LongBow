import { useState } from "react";
import "./Styles.css"

const products = [
  {url:"http://localhost:5173/Floor1.jpg",title:"floor"},
  {url:"http://localhost:5173/Room1.jpg",title:"room"},
  {url:"http://localhost:5173/Handle1.jpg",title:"handle"},
];
const FeaturedProduct = () => {
    return (
      <div className="featured-product-container">
        <a className="featured-product-container-title">Featured Products</a>
        <div className="products-container">
          {products.map((product,productIndex)=>(
            <div key={productIndex} className="product" style={{backgroundImage:`url(${products[productIndex].url})`} }></div>
          ))}
        </div>
      </div>
    );
  };
  export default FeaturedProduct;