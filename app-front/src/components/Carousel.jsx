import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import Axios from "axios";

const Carousel = () => {
  const [shops, setShops] = useState([]);
  useEffect(() => {
    fetch("/shops")
      .then((response) => response.json())
      .then((data) => {
        setShops(data.shops);
      });
  }, []);

  const [idActive, setIdActive] = useState(null);
  const [isActive, setIsActive] = useState(false);

  console.log("idActive", idActive);

  const handlePostRequest = (id) => {
    console.log("Sending shopId:", id);
    Axios.post("/shopId", { id: id })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <h1 className="flex text-center justify-center text-[28px] font-semibold">
        Choose shop for order
      </h1>
      <div className="py-4 px-20 flex justify-center">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          grabCursor={true}
          freeMode={true}
          modules={[FreeMode, Pagination]}
          className="mySwiper flex justify-center"
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
        >
          {shops.map((i) => (
            <SwiperSlide>
              <div className={`pb-5 flex flex-col items-center`} key={i.id}>
                <img className={`h-[100px] `} src={i.img} alt="" />
                {console.log(isActive)}
                <button
                  type="submit"
                  className={`px-2 py-1 text-xl rounded-full ${
                    isActive && idActive === i.id
                      ? "border-red-500 border-2"
                      : "border-green-500 border-2"
                  }`}
                  //onMouseOver={handlePostRequest(i.id)}
                  onClick={() => {
                    setIsActive(!isActive);
                    setIdActive(isActive ? null : i.id);
                    handlePostRequest(i.id);
                  }}
                  disabled={
                    idActive === i.id || idActive === null ? false : true
                  }
                >
                  {isActive && idActive === i.id ? "Cancel" : "Choose"}
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Carousel;
