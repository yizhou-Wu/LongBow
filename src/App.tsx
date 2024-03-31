import './App.css'
import Home from './Home' 
import ProductDetailPage from './ProductDetailPage';
import ShopPage from './ShopPage'
import { BrowserRouter,Routes,Route } from "react-router-dom";

function App() {
  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element ={<ShopPage />}/>
          {/* <Route path="/product" element ={<ProductDetailPage props={props}/>}/> */}
          <Route
            path='/product/:pid' element={<ProductDetailPage/>}
          />
          <Route
            path='/product/:pid' element={<ProductDetailPage/>}
          />
        </Routes>

      </BrowserRouter>
    </>
  )
}
export default App
