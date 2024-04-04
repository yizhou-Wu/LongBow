import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  category: string;
}

export type Product = {
  id: 1;
  url: string[];
  title: string;
  price: number;
  type: string;
  description: string[];
  specification: string[];
};

type CategotyProduct = {
  name: string;
  products: Product[];
};

const CategoryProductDisplay = (props: Props) => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    fetch("./productList.json") // Replace with the correct path to your JSON file or API endpoint
      .then((response) => response.json())
      .then((data) => {
        const productsUnderCategory = data.categories.find(
          (category: CategotyProduct) => category.name === props.category
        ).products;
        setProducts(productsUnderCategory);
      })
      .catch((error) => console.error("Error fetching product data:", error));
  }, [props.category]);

  const navigate = useNavigate();
  const handleNavigate = (product: Product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };
  return (
    <>
      <div className="products-display-area">
        {products.map((product, productIndex) => {
          return (
            <div
              key={productIndex}
              className="product-container"
              onClick={() => handleNavigate(product)}
            >
              <img src={`${products[productIndex].url[0]}`} />
              <span>{product.title}</span>
            </div>
          );
        })}
      </div>
      <style jsx>{`
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
        .products-display-area {
          display: flex;
          padding-left: 25px;
          padding-right: 25px;
          flex-flow: row wrap;
        }
        .product-container {
          flex: 1 1 25%;
          margin: 2%;
          padding: 12px;
          cursor: pointer;
        }
        .product-container img {
          width: 100%;
        }
      `}</style>
    </>
  );
};

export default CategoryProductDisplay;
