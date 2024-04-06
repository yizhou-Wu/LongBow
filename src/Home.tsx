import FeaturedProduct from "./FeaturedProduct";
import Footer from "./Footer";
import ImageSlider from "./ImageSlider";
import NaviBar from "./NaviBar";

const Home = () => {
  return (
    <>
      <NaviBar isInHomePage={true} />
      <ImageSlider />
      <FeaturedProduct />
      <Footer />
    </>
  );
};
export default Home;
