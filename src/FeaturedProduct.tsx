const products = [
  { url: "http://localhost:5173/Floor1.jpg", title: "floor" },
  { url: "http://localhost:5173/Room1.jpg", title: "room" },
  { url: "http://localhost:5173/Handle1.jpg", title: "handle" },
];
const FeaturedProduct = () => {
  return (
    <>
      <div className="featured-product-container">
        <a className="featured-product-container-title">Featured Products</a>
        <div className="products-container">
          {products.map((product, productIndex) => (
            <div
              key={productIndex}
              className="product"
              style={{ backgroundImage: `url(${products[productIndex].url})` }}
            />
          ))}
        </div>
      </div>
      <style jsx>
        {`
          .featured-product-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px;
          }
          .featured-product-container-title {
            font-size: 2.5rem;
            margin-top: 20px;
            text-align: center;
          }
          .products-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            margin-top: 20px;
            width: 100%;
            height: 700px;
          }
          .product {
            background-size: cover;
            background-position: center;
          }

          @media screen and (max-width: 1400px) {
            .product {
              height: auto;
              width: 100%;
              height: 100%;
            }
          }

          @media screen and (max-width: 700px) {
            .products-container {
              grid-template-columns: repeat(2, 1fr);
            }
            .product:nth-child(3) {
              grid-column: span 2; /* Make the third item span across two columns */
            }
          }

          @media screen and (max-width: 320px) {
            .products-container {
              grid-template-columns: repeat(1, 1fr);
            }
          }
        `}
      </style>
    </>
  );
};
export default FeaturedProduct;
