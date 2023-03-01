import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import  useDetailedRestaurant  from "../utils/useDetailedRestaurant";

const RestaurantMenu = () => {
    // const params = useParams();
    // const {newid} = params;

    const {newid} = useParams();
    const restaurant = useDetailedRestaurant(newid);

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