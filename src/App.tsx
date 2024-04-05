import Home from "./Home";
import NaviBar from "./NaviBar";
import ProductDetailPage from "./ProductDetailPage";
import ShopPage from "./ShopPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="container">
        <NaviBar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/product/:pid" element={<ProductDetailPage />} />
          </Routes>
        </BrowserRouter>
        <style jsx global>{`
          body {
            font-family: Calibri, Candara, Segoe, Optima, Arial, sans-serif;
            background-color: #f8f8f8;
            margin: 0;
          }
          .container {
            display: flex;
            flex-direction: column;
            position: relative;
            background-image: url("http://localhost:5173/Floor1.jpg");
            max-height: 100vh;
          }
        `}</style>
      </div>
    </>
  );
}
export default App;
