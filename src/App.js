import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import {createBrowserRouter,RouterProvider ,Outlet} from 'react-router-dom';
import Error from "./components/Error"
import About from "./components/About"
import Support from "./components/Support"
import Contact from "./components/Contact"
import Cart from "./components/Cart"
import RestaurantMenu from "./components/RestaurantMenu";
import SignInForm from "./components/SignInForm";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path : '/',
    element : <AppLayout/>,
    errorElement : <Error/>,
    children : [
      {
        path : '/',
        element : <Body/>    
      },
      {
        path : '/about',
        element : <About/>    
      },
      
      {
        path : '/support',
        element : <Support/>    
      },
        
      {
        path : '/contact',
        element : <Contact/>    
      },
       
      {
        path : '/cart',
        element : <Cart/>    
      },
      {
        path : '/signIn',
        element : <SignInForm/>    
      },

      { // dynamic routing
        path : '/restaurant/:newid',
        element :<RestaurantMenu/>
      }        
        
    ],

  },

  ])
  
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router = {appRouter}/>);
