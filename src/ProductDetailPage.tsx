// import React from 'react';
import { useState } from "react";
import NaviBar from "./NaviBar";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";

const ProductDetailPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const location = useLocation();
  const product = location.state.product;
  const imageDisplay = {
    width: "600px",
    height: "600px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "green",
    backgroundImage: `url(${product.url[currentIndex]})`,
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <>
      <NaviBar></NaviBar>
      <div className="shop-product-diplay-general-container">
        <div className="shop-product-display-area">
          <div className="shop-product-smallImages-container">
            {product.url.map((u, uIndex) => {
              const smallImageDisplay = {
                width: "100px",
                height: "100px",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundColor: "yellow",
                marginRight: "10px",
                marginBottom: "10px",
                backgroundImage: `url(${u})`,
              };
              return (
                <div
                  key={uIndex}
                  style={smallImageDisplay}
                  onClick={() => goToSlide(uIndex)}
                ></div>
              );
            })}
          </div>

          <div style={imageDisplay}></div>
          <div className="shop-product-info-display">
            <h1>{product.name}</h1>
            <a>{"$" + product.price}</a>
            <a>{product.type}</a>
            <ul>
              <a>Description</a>
              {product.description.map((dec, decIndex) => {
                return <li key={decIndex}>{dec}</li>;
              })}
            </ul>
            <ul>
              <a>Specification</a>
              {product.specification.map((spec, specIndex) => {
                return <li key={specIndex}>{spec}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
      <Footer></Footer>
      <style jsx>{`
        .shop-product-diplay-general-container {
          height: 1200px;
          width: 100%;
          display: flex;
          justify-content: center;
        }
        .shop-product-display-area {
          margin-top: 50px;
          display: inline-flex;
          height: 1000px;
          width: 1500px;
          justify-content: center;
        }
        .shop-product-smallImages-container {
          display: flex;
          flex-direction: column;
          margin-left: 50px;
          width: 110px;
          height: 1000px;
        }
        .shop-product-image-display {
          width: 600px;
          height: 600px;
        }
        .shop-product-info-display {
          display: flex;
          flex-direction: column;
          margin-left: 50px;
          width: 600px;
          height: 1000px;
        }
        .shop-product-info-display h1 {
          font-size: 50px;
          margin-top: 15px;
          margin-bottom: 15px;
        }
        .shop-product-info-display a {
          font-size: 20px;
          margin-top: 15px;
          margin-bottom: 15px;
        }
        .shop-product-info-display li {
          margin-left: 20px;
          margin-top: 15px;
          margin-bottom: 15px;
        }
      `}</style>
    </>
  );
};
export default ProductDetailPage;
