import React, { useState, useEffect, useMemo } from "react";
import img1 from "../images/home/1.jpg";
import img2 from "../images/home/2.jpg";

const ImgSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImg = () => {
    const isFirstImg = currentIndex === 0;
    const newIndex = isFirstImg ? img.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextImg = () => {
    const isLastImg = currentIndex === img.length - 1;
    const newIndex = isLastImg ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const img = ["../images/home/1.jpg", "../images/home/2.jpg"];
  return (
    <div className="w-full  m-auto relative group">
      <div className="w-full h-full rounded-none bg-cover">
        <img
          src={img[currentIndex]}
          alt="product image"
          className="w-full h-full object-cover"
        />
        <span
          onClick={prevImg}
          className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-2 text-2xl rounded-full opacity-50 p-2 bg-black text-white flex items-center justify-center"
        >
          <ion-icon name="chevron-back"></ion-icon>
        </span>
        <span
          onClick={nextImg}
          className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-2 text-2xl rounded-full opacity-50 p-2 bg-black text-white flex items-center justify-center"
        >
          <ion-icon name="chevron-forward"></ion-icon>
        </span>
      </div>
    </div>
  );
};

export default ImgSlider;
