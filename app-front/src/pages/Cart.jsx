import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotal,
  removeFromCart,
} from "../components/redux/CartSlice";
const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };
  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };
  const handleIncreaseCart = (cartItem) => {
    dispatch(addToCart(cartItem));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  useEffect(() => {
    dispatch(getTotal());
  }, [cart, dispatch]);
  return (
    <div className="py-[2rem] px-[8rem] ">
      <h2 className="flex justify-center text-[28px] font-medium">
        Shopping Cart
      </h2>
      {cart.cartItems.length === 0 ? (
        <div className="mt-4">
          <h4 className="flex justify-center text-[18px]">
            Yout cart is empty now
          </h4>
          <Link to="/shops" className="flex justify-center text-[22px] pt-2">
            <div className="text-[28px] pr-2">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            Go shopping
          </Link>
        </div>
      ) : (
        <div>
          <div className=" mt-[2rem] mb-[1rem] py-2rem px-4rem grid items-center grid-cols-6 gap-[200px]">
            <h3 className=" text-[16px] uppercase col-span-3 pl-[0.5rem]">
              Product
            </h3>
            <h3 className="text-[16px] uppercase">Price</h3>
            <h3 className="text-[16px] uppercase flex justify-center">
              Quantity
            </h3>
            <h3 className="text-[16px] uppercase flex justify-end mr-3">
              Total
            </h3>
          </div>
          <div className="">
            {cart.cartItems?.map((cartItem) => (
              <div
                key={cartItem.id}
                className="cart-item grid items-center grid-cols-6 gap-[200px] border-t-2 p-[1rem]"
              >
                <div className="cart-product col-span-3 flex">
                  <img
                    className="w-[100px] mr-4  max-w-full"
                    src={
                      cartItem.img
                        ? cartItem.img
                        : "https://png.pngtree.com/png-vector/20191218/ourmid/pngtree-coming-soon-logo-vector-template-design-illustration-png-image_2091063.jpg"
                    }
                    alt="productImg"
                  />
                  <div className="mt-4">
                    <h3 className="text-[18px] font-[400]">{cartItem.name}</h3>

                    <button
                      className="px-1 py-2 text-[20px] hover:text-red-600 cursor-pointer "
                      onClick={() => handleRemoveFromCart(cartItem)}
                    >
                      <ion-icon name="trash"></ion-icon>
                    </button>
                  </div>
                </div>
                <div className="cart-product-price flex">
                  {cartItem.price}UAN\{cartItem.description}
                </div>
                <div className="flex  justify-center ml-2">
                  <button
                    className="py-3 px-6 cursor-pointer "
                    onClick={() => handleDecreaseCart(cartItem)}
                  >
                    -
                  </button>
                  <div className="count py-3 border-none">
                    {cartItem.productAmount}
                  </div>
                  <button
                    className="py-3 px-6 cursor-pointer "
                    onClick={() => handleIncreaseCart(cartItem)}
                  >
                    +
                  </button>
                </div>

                <div className="cart-product-total-price justify-self-end  font-semibold flex">
                  {cartItem.price * cartItem.productAmount}UAN
                </div>
              </div>
            ))}
          </div>
          <div className=" flex justify-between items-start  pt-8 ">
            <button
              className=" w-[130px] max-w-full h-[40px] border rounded-md tracking-[1.15px] font-[400] cursor-pointer"
              onClick={() => handleClearCart()}
            >
              Clear Cart
            </button>
            <div className="cart-checkout w-[270px] max-w-full">
              <div className="subtotal flex justify-between text-[20px]">
                <span>Subtotal</span>
                <span className=" font-[700]">{cart.cartTotalAmount} UAN</span>
              </div>
              <p className="text-[14p] font-[200] my-2">
                Delivery calculated at checkout
              </p>
              <Link to ='orderdetails' button className="flex text-white justify-center text-[20px] border-green-600 px-3 py-2 w-[270px] rounded-md bg-green-600">
                Check out
              </Link>
              <Link to="/shops" className="pt-2 text-gray-500 flex">
                <div className="text-[20px] pr-2">
                  <ion-icon name="arrow-back-outline"></ion-icon>
                </div>
                Continue shopping
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
