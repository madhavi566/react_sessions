import Logo from '../assets/img/food_love.jpeg'

const Title  = () => {
return (
<>
<a href="/"> 
<img className="logo" 
src = {Logo} alt="logo"/></a>
</>
)}


const Header = () =>{

    return ( 
    <div className="header">
       {Title()}
       <div className="nav-items">
      <ul>
          <li>Home</li>
          <li>About</li>
          <li>Support</li>
          <li>Cart</li>
       </ul>   
   </div>
    </div>
   )
   }
   

   export default Header;
