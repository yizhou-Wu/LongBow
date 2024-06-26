import Footer from "./Footer";
import { Fragment } from "react";
import CategoryProductDisplay from "./CategoryProductDisplay";
import { useState } from "react";
import NaviBar from "./NaviBar";

const categories = ["floor", "wall", "hardware"];
const ShopePage = () => {
  const [currentCategory, setCategory] = useState(categories[0]);
  const toggleCategory = (clickedCategory: string) => {
    setCategory(clickedCategory);
  };

  return (
    <>
      <NaviBar isInHomePage={false} />
      <div className="shop-container">
        <div className="shop-catagory-container">
          <ul className="list">
            {categories.map((category, categoryIndex) => (
              <Fragment key={categoryIndex}>
                <li>
                  <a
                    className={category === currentCategory ? "selected" : ""}
                    onClick={() => toggleCategory(category)}
                  >
                    {category}
                  </a>
                </li>
                {categoryIndex < categories.length - 1 && <li>|</li>}
              </Fragment>
            ))}
          </ul>
        </div>
        <CategoryProductDisplay category={currentCategory} />
      </div>
      <Footer />

      <style jsx>{`
        .shop-container {
          gap: 4rem;
          display: flex;
          flex-direction: column;
          margin-top: 3.6rem;
        }

        .shop-catagory-container {
          display: flex;
          justify-content: space-between; /* Adjust as needed */
          align-items: center; /* Align items vertically in the container */
          justify-content: center; /* Center items horizontally */
          margin-top: 3.6rem;
        }
        .shop-catagory-container li a {
          text-decoration: none; /* Remove default underline */
          color: #333; /* Default text color */
          transition: color 0.3s ease; /* Smooth transition for color */
          cursor: pointer; /* Change cursor to pointer on hover */
        }
        .shop-catagory-container li a.selected {
          border-bottom: 2px solid #666; /* Add underline for selected category */
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
