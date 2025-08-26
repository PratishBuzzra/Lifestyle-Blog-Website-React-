import React, { useEffect, useState } from "react";
import "./CarouselStyles.css";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
const Carousel = ({ data }) => {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoPlay] = useState(true);
  let timeOut = null;
  useEffect(() => {
    timeOut =
      autoplay &&
      setTimeout(() => {
        slideRight();
      }, 2500);
  });
  const slideRight = () =>
    setCurrent(current === data.length - 1 ? 0 : current + 1);
  const slideLeft = () =>
    setCurrent(current === 0 ? data.length - 1 : current - 1);
  return (
    <div
      className="carousel"
      onMouseEnter={() => {
        setAutoPlay(false);
        clearTimeout(timeOut);
      }}
      onMouseLeave={() => setAutoPlay(true)}
    >
      <div className="carousel-wrapper">
        {data.map((item, index) => (
          <div
            key={index}
            className={
              index === current
                ? "carousel-card carousel-card-active"
                : "carousel-card"
            }
          >
            <img src={item} alt="img" className="carousel-img-slide" />
          </div>
        ))}
        <div className="carousel-arrow-left" onClick={slideLeft}>
          <FaArrowLeft />
        </div>
        <div className="carousel-arrow-right" onClick={slideRight}>
          <FaArrowRight />
        </div>
        <div className="carousel-pagination">
          {data.map((_, index) => (
            <div
              key={index}
              className={
                index === current
                  ? "carousel-pagination-dot carousel-pagination-dot-active"
                  : "carousel-pagination-dot"
              }
              onClick={() => setCurrent(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
