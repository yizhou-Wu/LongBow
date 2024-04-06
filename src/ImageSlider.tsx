import { useEffect, useState } from "react";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "http://localhost:5173/Floor1.jpg",
    "http://localhost:5173/Room1.jpg",
    "http://localhost:5173/Handle1.jpg",
  ];

  useEffect(() => {
    // Automatically change slide every 3 seconds (adjust as needed)
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      setCurrentIndex(nextIndex);
    }, 5000);

    return () => {
      // Clear the interval when the component is unmounted
      clearInterval(interval);
    };
  }, [currentIndex]);

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <>
      <button className="slider-button prev" onClick={goToPrevSlide}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
      </button>
      <button className="slider-button next" onClick={goToNextSlide}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
        </svg>
      </button>
      <img
        className="slider-image"
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
      />
      <style jsx>
        {`
          .image-slider {
            position: relative;
            max-height: 100vh;
            margin-top: 50px;
          }

          .slider-button {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background: transparent;
            border: none;
            cursor: pointer;
            padding: 10px;
            height: 25px;
            width: 25px;
          }

          .prev {
            left: 2.5rem;
          }

          .next {
            right: 2.5rem;
          }

          .slider-image {
            width: 100%;
            height: auto;
            max-height: 100vh;
          }
        `}
      </style>
    </>
  );
};

export default ImageSlider;
