import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CategoryProductDisplay = (props) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("./productList.json") // Replace with the correct path to your JSON file or API endpoint
      .then((response) => response.json())
      .then((data) => {
        const productsUnderCategory = data.categories.find(
          (category) => category.name === props.category
        ).products;
        setProducts(productsUnderCategory);
      })
      .catch((error) => console.error("Error fetching product data:", error));
  }, [props.category]);

  const navigate = useNavigate();
  const handleNavigate = (product) => {
    console.log(product);
    navigate(`/product/${product.id}`, { state: { product } });
  };
  return (
    <>
      <div className="shop-catagory-display-container">
        <div className="shop-catagory-display-area">
          {products.map((product, productIndex) => {
            const productStyle = {
              // height: "400px",
              // width: "400px",
              // backgroundSize: "cover",
              // backgroundPosition: "center",
              backgroundImage: `url(${products[productIndex].url[0]})`,
            };
            return (
              <div
                key={productIndex}
                className="shop-catagory-display-product-container"
                onClick={() => handleNavigate(product)}
              >
                <div style={productStyle}></div>
                <img src={`${products[productIndex].url[0]}`}></img>
                <span>{product.title}</span>
              </div>
            );
          })}
        </div>
      </div>
      <style jsx>{`
        .shop-page-container {
          display: flex;
          flex-flow: column nowrap;
        }

        /* .shop-menu-container{
  display: flex;
    padding-left: 25px;
    padding-right: 25px;
} */
        .shop-catagory-container {
          display: flex;
          justify-content: space-between; /* Adjust as needed */
          align-items: center; /* Align items vertically in the container */
          justify-content: center; /* Center items horizontally */
        }

        .list {
          list-style: none; /* Remove default list styles */
          padding: 0; /* Remove default padding */
          margin: 0; /* Remove default margin */
          display: flex; /* Use flexbox to layout list items horizontally */
        }
        .list li {
          padding: 10px 20px; /* Adjust padding as needed */
          border-radius: 5px; /* Add some border radius for styling */
        }
        .shop-catagory-display-area {
          display: flex;
          padding-left: 25px;
          padding-right: 25px;
          flex-flow: row wrap;
        }
        .shop-catagory-display-container {
          display: flex;
          padding-left: 25px;
          padding-right: 25px;
        }
        .shop-catagory-display-product-container {
          flex: 1 1 25%;
          margin: 2%;
          padding: 12px;
          /* border: 2px solid #000; */
        }
        .shop-catagory-display-product-container img {
          width: 100%;
        }
      `}</style>
    </>
  );
};

export default CategoryProductDisplay;