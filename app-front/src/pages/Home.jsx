import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const starIcons = Array(5).fill(
    <span className="px-3">
      <ion-icon name="star-outline"></ion-icon>
    </span>
  );

  return (
    <div className="">
      <div className="lg:flex block bg-[#68a164] w-full h-[500px] overflow-y-hidden -mt-14 z-0 ">
        <div className="w-[400px] h-[400px] rounded-full absolute bg-[#6a8c68] opacity-50 -top-10 -left-20"></div>
        <div className="absolute">
          <h1 className="lg:text-[50px] text-[40px] font-semibold lg:font-bold text-white lg:mt-36 lg:ml-24 mt-20 lg:px-0 px-1">
            Save time <br /> Choose DeliveryApp
          </h1>
        </div>
        <div className="absolute lg:top-[28%] lg:right-80 z-50 flex lg:justify-normal justify-center lg:mt-0 top-[300px] lg:px-0 align-middle">
          <Link
            to="/shops"
            className="text-[24px] border border-white rounded-full tracking-[5px] text-white px-4 py-2 "
          >
            START
          </Link>
        </div>
        <div className="w-[300px] h-[300px] rounded-full absolute bg-[#6a8c68] opacity-50 lg:bottom-[250px] bottom-[350px] lg:right-4 right-0 overflow-hidden"></div>
        <div className="w-[250px] h-[250px] rounded-full absolute bg-white opacity-20 bottom-[380px] lg:bottom-[360px] lg:right-[250px] right-[200px] overflow-hidden"></div>
      </div>
      <div className="mt-8  mb-10">
        <h2 className="text flex justify-center text-[28px]">Our props</h2>
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 mt-4 lg:px-[190px] px-2">
          <div className="lg:h-[250px] h-[210px] lg:w-[350px] w-[370px] lg:px-0 bg-[#f0ecec83] flex flex-col justify-center items-center">
            <div className="flex text-[28px] pb-5">{starIcons}</div>
            <h3 className="text-[22px] text-center">
              1M <br />
              Positive reviews
            </h3>
          </div>

          <div className="lg:h-[250px] h-[210px] lg:w-[350px] w-[370px] lg:px-0 bg-[#f0ecec83] flex flex-col justify-center items-center">
            <div className="flex text-[28px] pb-5">
              <span className="text-[40px]">
                <ion-icon name="stopwatch-outline"></ion-icon>
              </span>
            </div>
            <h3 className="text-[22px] text-center">Fast delivery in time</h3>
          </div>
          <div className="lg:h-[250px] h-[210px] lg:w-[350px] w-[370px] lg:px-0 bg-[#f0ecec83] flex flex-col justify-center items-center">
            <div className="flex text-[28px] pb-5">
              <span className="text-40">
                <ion-icon name="pricetags-outline"></ion-icon>
              </span>
            </div>
            <h3 className="text-[22px] text-center">
              Personal promocods and bonuses every day
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
