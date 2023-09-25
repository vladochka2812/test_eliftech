import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../components/redux/CartSlice";
import { Link } from "react-router-dom";

const Shops = () => {
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

  const handlePostRequest = (id) => {
    Axios.post("/shopId", { id: id })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, [idActive]);

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const cart = useSelector((state) => state.cart);

  return (
    <div>
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
                <button
                  type="submit"
                  className={`px-2 py-1 text-xl rounded-full ${
                    isActive && idActive === i.id
                      ? "border-red-500 border-2"
                      : "border-green-500 border-2"
                  }`}
                  onClick={() => {
                    setIsActive(!isActive);
                    setIdActive(isActive ? null : i.id);
                    handlePostRequest(i.id);
                  }}
                  disabled={
                    (idActive === i.id || idActive === null) &&
                    (cart.cartItems.find((item) => item.shop_id === i.id) ||
                      cart.cartItems.length === 0)
                      ? false
                      : true
                  }
                >
                  {isActive && idActive === i.id ? "Cancel" : "Choose"}
                </button>
                {(idActive === i.id || idActive === null) &&
                (cart.cartItems.find((item) => item.shop_id === i.id) ||
                  cart.cartItems.length === 0) ? (
                  ""
                ) : (
                  <span className="flex justify-center text-[12px] text-red-600">
                    You can choose products only from one shop
                  </span>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="lg:px-20 px-10 flex-wraper justify-center py-5 grid gap-y-5 lg:grid-cols-4 lg:gap-[200px] md:grid-cols-2 md:gap-[70px] grid-cols-1 grip-10 ">
        {products.length > 0 && idActive !== null
          ? products.map((i) => (
              <div
                key={i.id}
                className="flex-col h-[350px] w-[300px] rounded-3xl border-black border"
              >
                <img
                  src={
                    i.img
                      ? i.img
                      : "https://png.pngtree.com/png-vector/20191218/ourmid/pngtree-coming-soon-logo-vector-template-design-illustration-png-image_2091063.jpg"
                  }
                  alt="product"
                  className="w-[300px] rounded-3xl"
                />
                <div className="flex justify-between px-4">
                  <h2 className="text-[22px]">{i.name}</h2>
                  <h3 className="text-[22px]">
                    {i.price}/{i.description}
                  </h3>
                  <div className="flex border-green-600 px-3 py-2 rounded-2xl bg-green-600">
                    <button
                      onClick={() => {
                        handleAddToCart(i);
                      }}
                    >
                      <Link to="/cart">Add</Link>
                    </button>
                  </div>
                </div>
              </div>
            ))
          : ""}
      </div>
      {products.length === 0 && idActive !== null ? (
        <div className="flex justify-center">
          <h1 className="text-[64px]"> Products will appear soon... </h1>
        </div>
      ) : (
        ""
      )}
      {idActive === null ? (
        <div className="flex justify-center">
          <h1 className="text-[64px]">
            Products will appear after choosing shop...{" "}
          </h1>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Shops;
