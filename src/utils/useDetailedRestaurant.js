import { useState,useEffect } from "react";
import { FECTH_MENU_URL } from "../constants";

const useDetailedRestaurant = (newid) => {
    const [restaurant,setRestaurant] = useState(null);

    useEffect (()=>{
       getRestaurantDetails();
   },[])


   async function getRestaurantDetails() {
    const data = await fetch(FECTH_MENU_URL + newid);
    const menuDetails = await data.json();
    setRestaurant(menuDetails?.data)
    console.log(menuDetails?.data);
    }
  return restaurant;

}
export default useDetailedRestaurant;