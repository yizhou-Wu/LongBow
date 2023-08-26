import NaviBar from './NaviBar'
import Footer from './Footer'
import { Fragment } from 'react';
import CategoryProductDisplay from './CategoryProductDisplay';
import { useState } from 'react';
const categories= ["floor","wall","hardware"]
const ShopePage =()=>{
    const [currentCategory, setCategory] = useState(categories[0]);
    const toggleCategory = (clickedCategory)=>{
        setCategory(clickedCategory);
        console.log(currentCategory)
    }
    return (
        <div>
            <NaviBar></NaviBar>
            <div className='shop-menu-container'>
                <a style={{fontSize:"50px"}}>Shop</a>
                <div className='shop-catagory-container'>
                    <ul>
                        {categories.map((category,categoryIndex)=>(
                            <Fragment key={categoryIndex}>
                                <li ><a onClick={()=>toggleCategory(category)}>{category}</a></li>
                                {categoryIndex < categories.length - 1 && <li>|</li>}
                            </Fragment>
                        ))}
                    </ul>
                </div>
                <hr />
                <CategoryProductDisplay category={currentCategory}></CategoryProductDisplay>

            </div>
            <Footer></Footer>
        </div>
    );

}
export default ShopePage;