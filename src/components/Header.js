import Logo from '../assets/img/food_love.jpeg'
import {useState,useContext} from 'react';
import {Link} from 'react-router-dom';
import useOnline from './../utils/useOnline';
import UserContext from '../UserContext';

const Title  = () => {
return (
<>
<a href="/"> 
<img className="logo" 
src = {Logo} alt="logo"/></a>
</>
)}


const loggedInUser = () => {
    return true;
}

const Header = () =>{
    const [loggedIn,SetLoggedIn] = useState(false);
    const [title,setTitle] = useState("Food Villa");
    const isOnline = useOnline()
    const {beginner} = useContext(UserContext);

    return ( 
    <div className="flex justify-between bg-red-200 shadow-red-400"> 
       {Title()}
       <h1>{title}</h1>
        <button onClick = {()=>{setTitle("change the title")}}>Change Title </button>
        <h1>{isOnline ? '✅ ' : '🔴'}</h1>            
             <h1 className='text-black font-bold'>{beginner.name}</h1>
      <ul className='flex space-x-2 py-4'>
      <li>
      <Link to ='/'> Home 
      </Link>
          </li>
          <li>
      <Link to ='/about'> About

      </Link>
          </li> 
          <li>
      <Link to ='/about/profile'> Profile
      {/* </Link>
          </li> 
          <li>
      <Link to ='/about/profileClass'> Profile Class */}

      </Link>
          </li> 

          <li>
          <Link to ='/support'>Support
      </Link>

      </li> 
          <li>
          <Link to ='/contact'>Contact
      </Link>

          </li> 
          <li>
          <Link to ='/cart'>Cart
      </Link>

          </li> 
          <li>
          <Link to ='/instamart'>Instamart
          </Link>

          </li> 

          <li>
          <Link to ='/signIn'>SignIn 
      </Link>

          </li> 
         
          
          <li>{loggedIn ? <button onClick = {()=> {SetLoggedIn(false)}}>Logout </button> :<button onClick = {()=> {SetLoggedIn(true)}}>Login </button> } 
          </li>
       </ul>

    </div>
   )
   }
   

   export default Header;