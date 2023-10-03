import React, { lazy , Suspense} from "react";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./componenets/Header";
import Body from "./componenets/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
//import About from "./componenets/About";
import Contact from "./componenets/Contact";
import Error from "./componenets/Error";
import RestaurantMenu from "./componenets/Restaurant-Menu";
import Cart from "./componenets/cart";
//import Grocery from "./componenets/Grocery";

/* 
*Chunking
*Code Splitting
*Dynamic Bundling
*Lazy Loading -bcz it will not load everything directly but we will load it when required
*Ondemand  Loading --when we go to particular page then only it will load
*/

//we will import grocery by using Lazy --lazy is a func given by react
const Grocery = lazy(() => import("./componenets/Grocery"));

//lazy loading for About page
const About = lazy(() => import("./componenets/About"));
/*
 * Header
 * - Logo
 * Nav Items
 * Body
 * --Search
 * Restaurent Container
 * RestaurentCard
 * Footer
 * -Copyright
 * Links
 * Address
 * Contact
 */

//create header

//Not using keys (not acceptable) <<<< index as key <<<<<(unique id)- best practice

//create functional component - it's just a js code which return jsx
const AppLayout = () => {
const [addMenu , setAddMenu] =useState();
  return (
    <div className="app">
      <Header />

      {/* whenever there is any change in the path so outlet will be filled with the children according to the path or what page we are. */}
    <Outlet />
    </div>
  );
};

//creating routing configuration which is array of object or lists
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <Suspense fallback ={<h1>Loading..</h1>}><About /></Suspense>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>,
      },
      {
        path: "/cart",
        element:<Cart />,
      },
      {
        path: "/restaurant/:resId" ,
        element: <RestaurantMenu />
      },
      
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
