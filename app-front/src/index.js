import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { disableReactDecTools } from "@fvilers/disable-react-devtools";
import "./index.css";
import CartSlice, { getTotal } from "./components/redux/CartSlice";

//if (process.env.NODE_ENV === "production") disableReactDecTools();

const store = configureStore({
  reducer: {
    cart: CartSlice,
  },
});
store.dispatch(getTotal());
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
