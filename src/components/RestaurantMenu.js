import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    // const params = useParams();
    // const {newid} = params;

    const {newid} = useParams();

    const [restaurant,setRestaurant] = useState(null);

    useEffect (()=>{
       getRestaurantDetails();
   },[])

   console.log(useState());

   async function getRestaurantDetails() {
    const data = await fetch('https://www.swiggy.com/dapi/menu/v4/full?lat=17.3856088&lng=78.4863827&menuId=' + newid);
    const menuDetails = await data.json();
    setRestaurant(menuDetails?.data)
    console.log(menuDetails?.data);
}

    return !restaurant ? (<Shimmer/> ) : (
        <div className="menu">
            {/* <h1>Restaurant ID  : {newid} </h1>  */}
            <div>
            <img className="card" src={IMG_CDN_URL + restaurant.cloudinaryImageId} alt="image" />
            <h3>{restaurant.area} </h3>
            <h3>{restaurant.avgRating} stars </h3>
            <h4>{restaurant.costForTwo} Rs </h4>
            </div>
            <div>
            <h2>Menu</h2>                    
                <ul>
                    {Object.values(restaurant?.menu?.items).map((item)=>(
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>  
            </div>              
        </div>
    )
}

export default RestaurantMenu;