import React ,{lazy , Suspense ,useState} from "react";
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
import ProfileClass from "./components/ProfileClass";
import UserContext from "./UserContext";
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

  const [user,setUser] = useState({
    name:'beginner',
    email:'beginner@gmail.com'
  }) 

  const [user2,setUser2] = useState({
    name:'user 2',
    email:'user2@gmail.com'
  }) 

  return (
    <UserContext.Provider value = {{
      beginner:user,
      setUser
    }}>
      <UserContext.Provider value = {{
      beginner:user2,
      setUser
    }}>
      <Header />
      </UserContext.Provider>
      <Outlet />
      <Footer />
    </UserContext.Provider>
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
        element : <Body user={{name: 'Beginner', course :'Namaste React'}}/>    
      },
      {
        path : '/about',
        element : <Suspense fallback={<h1>....loading</h1>}><About/></Suspense>,
        children : [
          {
            path:'profile',
            element:<Profile/>
          },
          // {
          //   path:'profileClass',
          //   element:<ProfileClass/>
          // }


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
