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
            height: 1000px;
            align-items: center;
          }
          .featured-product-container-title {
            height: 100px;
            font-size: 50px;
            margin-top: 30px;
          }
          .products-container {
            display: flex;
            height: 700px;
            width: 100%;
            justify-content: center;
          }
          .product {
            width: 350px;
            height: 75%;
            margin-top: 50px;
            margin-left: 100px;
            margin-right: 100px;
            background-size: cover;
            background-position: center;
          }
        `}
      </style>
    </>
  );
};
export default FeaturedProduct;
