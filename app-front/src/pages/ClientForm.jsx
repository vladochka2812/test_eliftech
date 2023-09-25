import Axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, orderAccepted } from "../components/redux/CartSlice";
import { Link } from "react-router-dom";

const ClientForm = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    phonenumber: "",
    address: "",
    deliveryMethod: "",
    paymentMethod: "",
  });

  const handleInput = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const cart = useSelector((state) => state.cart);
  const handlePostOrder = (e) => {
    e.preventDefault();
    Axios.post("/addorder", {
      name: inputValue.name,
      phone: inputValue.phonenumber,
      address: inputValue.address,
      orderProducts: cart.cartItems.map(
        (i) => `id:${i.id}-quantity:${i.productAmount}`
      ),
      totalPrice: cart.cartTotalAmount,
      deliveryMethod: inputValue.deliveryMethod,
      paymentMethod: inputValue.paymentMethod,
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(orderAccepted);
  };
  return (
    <div className="px-20 py-5">
      <h1 className="flex justify-center text-[28px] font-medium">
        Order details
      </h1>
      <form onSubmit={(e) => handlePostOrder(e)}>
        <div className="py-4 flex justify-center">
          <input
            type="name"
            name="name"
            placeholder="Name"
            value={inputValue.name}
            className="outline-none w-[450px] py-2 px-4 rounded-md bg-gray-200 "
            onChange={(e) => handleInput(e)}
            required
          />
        </div>
        <div className="py-4 flex justify-center" required>
          <input
            onChange={handleInput}
            name="phonenumber"
            value={inputValue.phonenumber}
            type="tel"
            placeholder="Phone number"
            className="outline-none w-[450px] py-2 px-4 rounded-md bg-gray-200 "
            required
            minLength={12}
            maxLength={12}
          />
        </div>

        <div className="py-4 flex justify-center">
          <input
            onChange={handleInput}
            name="address"
            value={inputValue.address}
            type="text"
            placeholder="Address"
            className="outline-none w-[450px] py-2 px-4 rounded-md bg-gray-200 "
            required
          />
        </div>
        <div className="flex justify-center py-4">
          <div className=" outline-none w-[450px] py-2 px-4 rounded-md bg-gray-200 text-gray-400 flex justify-between">
            <span>Delivery method</span>
            <div>
              <span className="px-4">
                <input
                  type="radio"
                  required
                  value="Super fast"
                  name="deliveryMethod"
                  onChange={() =>
                    handleInput({
                      target: { name: "deliveryMethod", value: "Super fast" },
                    })
                  }
                />
                <span className="text-[16px] px-1">Super fast</span>
              </span>
              <span className="px-4">
                <input
                  required
                  type="radio"
                  value="Fast"
                  name="deliveryMethod"
                  onChange={() =>
                    handleInput({
                      target: { name: "deliveryMethod", value: "Fast" },
                    })
                  }
                />
                <span className="text-[16px] px-1">Fast</span>
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-4">
          <div className=" outline-none w-[450px] py-2 px-4 rounded-md bg-gray-200 text-gray-400 flex justify-between">
            <span>Payment method</span>
            <div>
              <span className="px-4">
                <input
                  required
                  type="radio"
                  value="Card"
                  name="paymentMethod"
                  onChange={() =>
                    handleInput({
                      target: { name: "paymentMethod", value: "Card" },
                    })
                  }
                />
                <span className="text-[16px] px-1">Card</span>
              </span>
              <span className="px-4">
                <input
                  required
                  type="radio"
                  value="Cash"
                  name="paymentMethod"
                  onChange={() =>
                    handleInput({
                      target: { name: "paymentMethod", value: "Cash" },
                    })
                  }
                />
                <span className="text-[16px] px-1">Cash</span>
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-10 ">
          <button
            className="outline-none w-[450px]  px-4 rounded-md bg-green-600 py-3"
            type="submit"
            onClick={() => handleClearCart()}
          >
            <Link to="/">Make order</Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ClientForm;
