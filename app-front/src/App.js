import React from "react";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Shops from "./pages/Shops";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import ClientForm from "./pages/ClientForm";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar/>
      <Outlet />
      <Footer/>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: `/shops`,
        element: <Shops />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/cart/orderdetails",
        element: <ClientForm />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <ToastContainer />
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
