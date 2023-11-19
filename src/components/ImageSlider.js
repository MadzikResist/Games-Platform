import React, { useState } from 'react';
import { SliderData } from './SliderData';

const ImageSlider = ({ slides, current, setCurrent }) => {
  const length = slides.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <div className="slider">
      <div className="mainGameContainerGradient"></div>
      <div className="leftArrowSlider" onClick={prevSlide}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 320 512"
          fill="white"
        >
          <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
        </svg>
      </div>
      <div className="rightArrowSlider" onClick={nextSlide}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 320 512"
          fill="white"
        >
          <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
        </svg>
      </div>
      <div
        style={{
          width: '100%',
          height: '100%',
          transform: `translateX(-${current * 100}%)`,
        }}
        className="slide"
      >
        {SliderData.map((slide, index) => {
          return (
            <div
              key={index}
              className="imageSlider"
              style={{
                position: 'absolute',
                left: `${index * 100}%`,
                width: '100%',
                height: '100%',
                backgroundImage: `url(${slide.image})`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
export default ImageSlider;
