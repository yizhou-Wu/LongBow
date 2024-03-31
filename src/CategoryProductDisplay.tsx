import { useEffect,useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Styles.css'
const CategoryProductDisplay = (props)=>{
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
    const handleNavigate = (product)=>{
        console.log(product);
        navigate(`/product/${product.id}`, { state: { product } });
    }
    return(

        <div className='shop-catagory-display-container'>
            <div className='shop-catagory-display-area'>
                {products.map((product, productIndex) => {
                    const productStyle = {
                        // height: "400px",
                        // width: "400px",
                        // backgroundSize: "cover",
                        // backgroundPosition: "center",
                        backgroundImage: `url(${products[productIndex].url[0]})`
                    };
                    return (
                        <div key={productIndex} className='shop-catagory-display-product-container' onClick={()=>handleNavigate(product)}>
                            <div style={productStyle}></div>
                            <img src={`${products[productIndex].url[0]}`}></img>
                            <span>{product.title}</span>
                        </div>
                       
                    );
                })}
            </div>                   
        </div>
    );
}

export default CategoryProductDisplay