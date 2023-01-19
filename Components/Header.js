
const Title = <a href="/"> <b className="title">Vintage</b> <img className="food" src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyOiu6Yh_P14AlkIVM9L2syu7AVNOAcVHiqg&usqp=CAU" alt="header"/></a>

const Header = () =>{
    return ( 
    <div className="header">
      {Title}
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