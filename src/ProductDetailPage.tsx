import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import type { Product } from "./CategoryProductDisplay";
import NaviBar from "./NaviBar";

const ProductDetailPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const product: Product = location.state.product;
  const imageDisplay = {
    width: "50vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "white",
    backgroundImage: `url(${product.url[currentIndex]})`,
  };
  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <>
      <NaviBar />
      <div className="container">
        <div className="display-area">
          <div className="images-container">
            {product.url.map((u, urlIndex) => {
              const smallImageDisplay = {
                width: "100px",
                height: "100px",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundColor: "white",
                marginRight: "10px",
                marginBottom: "10px",
                backgroundImage: `url(${u})`,
              };
              return (
                <div
                  key={urlIndex}
                  style={smallImageDisplay}
                  onClick={() => goToSlide(urlIndex)}
                />
              );
            })}
          </div>

          <div style={imageDisplay}></div>
          <div className="shop-product-info-display">
            <h1>Product name</h1>
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
        <Footer />
      </div>

      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          margin-top: 4rem;
          gap: 3.2rem;
        }
        .display-area {
          margin-top: 50px;
          display: inline-flex;
          justify-content: center;
          height: 70vh;
        }
        .images-container {
          display: flex;
          flex-direction: column;
          margin-left: 50px;
          width: 110px;
          height: fit-content;
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
