import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Footer from "./component/footer/Footer"
import Navbar from "./component/navbar/Navbar"
import Add from "./pages/add/Add"
import Gig from "./pages/gig/Gig"
import Gigs from "./pages/gigs/Gigs"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Message from "./pages/message/Message"
import Messages from "./pages/messages/Messages"
import MyGigs from "./pages/myGigs/MyGigs"
import Order from "./pages/order/Order"
import Register from "./pages/register/Register"
import "./App.scss"

function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
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
          path: "/gigs",
          element: <Gigs />,
        },
        {
          path: "/myGigs",
          element: <MyGigs />,
        },
        {
          path: "/orders",
          element: <Order />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/message/:id",
          element: <Message />,
        },
        {
          path: "/add",
          element: <Add />,
        },
        {
          path: "/gig/:id",
          element: <Gig />,
        },
      ],
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;