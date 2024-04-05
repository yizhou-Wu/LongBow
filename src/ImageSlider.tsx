// import React from 'react';
import { useState, useEffect } from "react";

const slides = [
  { url: "http://localhost:5173/Floor1.jpg", title: "floor" },
  { url: "http://localhost:5173/Room1.jpg", title: "room" },
  { url: "http://localhost:5173/Handle1.jpg", title: "handle" },
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageContainerStyle = {
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "5%",
    backgroundImage: `url(${slides[currentIndex].url})`,
    transition: "background-image 0.5s ease-in-out",
  };
  const goToSlide = (slideIndex: number) => {
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
          {slides.map((slide, slideIndex) => (
            <div
              className="dot-index"
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
            >
              •
            </div>
          ))}
        </div>
      </div>
      <style jsx>
        {`
          .image-slider-container {
            display: flex;
            height: 1000px;
            align-items: center;
          }

          .image-slider {
            display: inline-block;
            height: 700px;
            width: 1000px;
            margin: 0 auto;
            align-items: center;
            justify-content: center;
          }
          .dot-container {
            display: flex;
            padding-top: 20px;
            justify-content: center;
          }
          .dot-index {
            font-size: 50px;
            margin: 20px;
            padding-left: 10px;
            padding-right: 10px;
            color: grey;
          }
        `}
      </style>
    </div>
  );
};
export default ImageSlider;
