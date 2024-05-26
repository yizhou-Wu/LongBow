import About from "./About";
import Home from "./Home";
import ProductDetailPage from "./ProductDetailPage";
import ShopPage from "./ShopPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
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
            max-height: 100vh;
          }
        `}</style>
      </div>
    </>
  );
}
export default App;
