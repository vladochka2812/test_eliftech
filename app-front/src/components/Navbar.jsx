import { Box, Drawer, Typography } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const cart = useSelector((state) => state.cart);
  return (
    <>
      <div className="flex lg:px-24 lg:pt-3 mt-1 z-50">
        <div className="lg:hidden">
          <button onClick={() => setMenu(true)}>
            <span className="text-[30px] px-1">
              <ion-icon name="menu-outline"></ion-icon>
            </span>
          </button>
          <Drawer anchor="left" open={menu} onClose={() => setMenu(false)}>
            <Box role="presentation" width="300px">
              <Typography component="div"></Typography>
              <div className="flex-col flex justify-center">
                <span
                  onClick={() => setMenu(false)}
                  className="absolute top-0 right-0 text-[30px]"
                >
                  <ion-icon name="close-outline"></ion-icon>
                </span>
                <Link
                  onClick={() => setMenu(false)}
                  className="mt-[50px] px-4 text-[22px] flex justify-between"
                  to="/"
                >
                  Home
                  <span className="mt-[4px] mr-10">
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                  </span>
                </Link>
                <Link
                  onClick={() => setMenu(false)}
                  className="py-5 px-4 text-[22px] flex justify-between"
                  to="/shops"
                >
                  Shops
                  <span className="mt-[4px] mr-10">
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                  </span>
                </Link>
              </div>
            </Box>
          </Drawer>
        </div>
        <div className="text-2xl flex-1 flex lg:px-0 px-3 lg:mt-0 mt-[2px]">
          DeliveryApp
        </div>
        <div className="flex-2 mt-1 flex">
          <Link className="px-10 text-[17px] lg:flex hidden" to="/">
            Home
          </Link>

          <Link className="px-10 text-[17px] lg:flex hidden" to="/shops">
            Shops
          </Link>

          <Link className="lg:px-10 px-3" to="/cart">
            <div className="lg:-mt-2">
              <span className="text-[27px]">
                <ion-icon name="cart-outline"></ion-icon>
              </span>
              <ion-badge color="accent">{cart.cartTotalQuantity}</ion-badge>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
