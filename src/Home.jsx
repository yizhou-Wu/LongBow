import "./Styles.css"
import NaviBar from './NaviBar'
import ImageSlider from './ImageSlider'
import FeaturedProduct from './FeaturedProduct'
import Footer from './Footer'

const Home = () => {
    return (
        <div>
            <NaviBar></NaviBar>
            <ImageSlider></ImageSlider>
            <FeaturedProduct></FeaturedProduct>
            <Footer></Footer>
        </div>
    );
}
export default Home;