import Home from "./Home";
import NaviBar from "./NaviBar";
import ProductDetailPage from "./ProductDetailPage";
import ShopPage from "./ShopPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
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
      `}</style>
    </>
  );
}
export default App;
