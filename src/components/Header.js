import Logo from '../assets/img/food_love.jpeg'
import {useState} from 'react';
import {Link} from 'react-router-dom';

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
      <li>
      <Link to ='/'> Home
      </Link>
          </li>
          <li>
      <Link to ='/about'> About
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
          <Link to ='/signIn'>SignIn 
      </Link>

          </li> 
         
          
          <li>{loggedIn ? <button onClick = {()=> {SetLoggedIn(false)}}>Logout </button> :<button onClick = {()=> {SetLoggedIn(true)}}>Login </button> } 
          </li>
       </ul>

   </div>
    </div>
   )
   }
   

   export default Header;