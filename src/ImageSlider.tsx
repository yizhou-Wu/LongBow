// import React from 'react';
import { useState ,useEffect} from "react";
import "./Styles.css"

const slides = [
  {url:"http://localhost:5173/Floor1.jpg",title:"floor"},
  {url:"http://localhost:5173/Room1.jpg",title:"room"},
  {url:"http://localhost:5173/Handle1.jpg",title:"handle"},
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageContainerStyle = {
    width:"100%",
    height:"100%",
    backgroundSize:"cover",
    backgroundPosition:"center",
    borderRadius: "5%",
    backgroundImage:`url(${slides[currentIndex].url})`,
    transition: "background-image 0.5s ease-in-out"
  };
  const goToSlide = (slideIndex)=>{
    setCurrentIndex(slideIndex);
  };
  useEffect(() => {
    // Automatically change slide every 3 seconds (adjust as needed)
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % slides.length;
      setCurrentIndex(nextIndex);
    }, 3000);

    return () => {
      // Clear the interval when the component is unmounted
      clearInterval(interval);
    };
  }, [currentIndex]);
  return (
    <div className="image-slider-container">
      <div className="image-slider">
        <div style={imageContainerStyle}></div>
        <div className="dot-container">
          {slides.map((slide, slideIndex)=>(
          <div className="dot-index"key={slideIndex} onClick={()=>goToSlide(slideIndex)}>•</div>))}
        </div>
      </div>
    </div>
  );
};
export default ImageSlider;