import React ,{lazy , Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import {createBrowserRouter,RouterProvider ,Outlet} from 'react-router-dom';
import Error from "./components/Error"
// import About from "./components/About"
import Support from "./components/Support"
import Contact from "./components/Contact"
import Cart from "./components/Cart"
import RestaurantMenu from "./components/RestaurantMenu";
import SignInForm from "./components/SignInForm";
import Profile from "./components/Profile";
import Assignment8 from "./components/classBased/Assignment8";
import Shimmer from "./components/Shimmer";
// import Instamart from "./components/Instamart";

// on demand loading
// chunking
// dynamic loading 
// code splitting
// Lazy loading 
// Dynamic import

const Instamart = lazy(()=> import("./components/Instamart"));

const About = lazy(()=>import("./components/About"));

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
        element : <Suspense fallback={<h1>....loading</h1>}><About/></Suspense>,
        children : [
          {
            path:'profile',
            element:<Profile/>
          }
        ]    
      },
      
      {
        path : '/support',
        element : <Support/>    
      },
        
      {
        path : '/contact',
        element : <Contact/>,
        children : [{
          path:'assignment8',
          element : <Assignment8/>
        }]
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
      },
      { // dynamic loading
        path : '/instamart',
        element :<Suspense fallback={<Shimmer/>}>
                  <Instamart/>
                </Suspense>
      }        
        
    ],

  },

  ])
  
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router = {appRouter}/>);
