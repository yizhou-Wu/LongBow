import ImageSlider from "./ImageSlider";
import FeaturedProduct from "./FeaturedProduct";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <div>
        <ImageSlider />
        <FeaturedProduct />
        <Footer />
      </div>
      <style jsx global>{`
        body {
          font-family: Calibri, Candara, Segoe, Optima, Arial, sans-serif;
        }
      `}</style>
    </>
  );
};
export default Home;
