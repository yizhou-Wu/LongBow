import NaviBar from "./NaviBar";
import Footer from "./Footer";
import { Fragment } from "react";
import CategoryProductDisplay from "./CategoryProductDisplay";
import { useState } from "react";
const categories = ["floor", "wall", "hardware"];
const ShopePage = () => {
  const [currentCategory, setCategory] = useState(categories[0]);
  const toggleCategory = (clickedCategory) => {
    setCategory(clickedCategory);
    console.log(currentCategory);
  };
  return (
    <>
      <div>
        <NaviBar></NaviBar>
        <div className="test">
          <div className="shop-catagory-container">
            <ul className="list">
              {categories.map((category, categoryIndex) => (
                <Fragment key={categoryIndex}>
                  <li>
                    <a onClick={() => toggleCategory(category)}>{category}</a>
                  </li>
                  {categoryIndex < categories.length - 1 && <li>|</li>}
                </Fragment>
              ))}
            </ul>
          </div>
        </div>
        <div className="shop-page-container">
          <hr />
          <CategoryProductDisplay
            category={currentCategory}
          ></CategoryProductDisplay>
        </div>

        <Footer></Footer>
      </div>
      <style jsx>{`
        .shop-page-container {
          display: flex;
          flex-flow: column nowrap;
        }

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
export default ShopePage;
