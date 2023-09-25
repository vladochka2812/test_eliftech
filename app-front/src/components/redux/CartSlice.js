import { createSlice } from "@reduxjs/toolkit";

import { toast } from "react-toastify";
const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
  test: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemFind = state.cartItems.findIndex(
        (i) => i.id === action.payload.id
      );
      state.test.push(action);
      if (itemFind >= 0) {
        state.cartItems[itemFind].productAmount += 1;
        toast.info(`${action.payload.name} amount is increased`, {
          position: "top-center",
        });
      } else {
        const tempProduct = {
          id: action.payload.id,
          ...action.payload,
          productAmount: 1,
        };
        state.cartItems.push(tempProduct);
        toast.success(`${action.payload.name} added to cart`, {
          position: "top-center",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart(state, action) {
      const nextCartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );

      state.cartItems = nextCartItems;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.error(`${action.payload.name} removed from cart`, {
        position: "top-center",
      });
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (state.cartItems[itemIndex].productAmount > 1) {
        state.cartItems[itemIndex].productAmount -= 1;
        toast.info(`Decreased ${action.payload.name} cart quantity`, {
          position: "top-center",
        });
      } else if ((state.cartItems[itemIndex].productAmount = 1)) {
        const nextCartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );

        state.cartItems = nextCartItems;

        toast.error(`${action.payload.name} removed from cart`, {
          position: "top-center",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    clearCart(state, action) {
      state.cartItems = [];
      toast.error(`Cart cleares`, {
        position: "top-center",
      });
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    orderAccepted(state, action) {
      state.cartItems = [];
      toast.info(`Order is accepted`, {
        position: "top-center",
      });
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    getTotal(state, action) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, productAmount } = cartItem;
          const itemTotal = price * productAmount;
          cartTotal.total += itemTotal;
          cartTotal.quantity += productAmount;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
  },
});

export const { addToCart, removeFromCart, decreaseCart, clearCart, getTotal, orderAccepted } =
  cartSlice.actions;

export default cartSlice.reducer;
