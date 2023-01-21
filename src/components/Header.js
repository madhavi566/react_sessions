import Logo from '../assets/img/food_love.jpeg'
import {useState} from 'react';

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
    return ( 
    <div className="header"> 
       {Title()}
       <h1>{title}</h1>
        <button onClick = {()=>{setTitle("change the title")}}>Change Title </button>
       <div className="nav-items">
      <ul>
          <li>Home</li>
          <li>About</li>
          <li>Support</li>
          <li>Cart</li>
       </ul>
{loggedIn ? <button onClick = {()=> {SetLoggedIn(false)}}>Logout </button> :<button onClick = {()=> {SetLoggedIn(true)}}>Login </button> } 

   </div>
    </div>
   )
   }
   

   export default Header;