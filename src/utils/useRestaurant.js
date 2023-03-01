import { useState,useEffect } from "react";

const useRestaurant = () => {
    const [restaurantList,setRestaurantList] = useState(null);

    useEffect(()=>{
        getRestaurants();
      },[])
    
        async function getRestaurants() {
          const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
          const dataList = await data.json();
        console.log(dataList, 'dataList');    
        setRestaurantList(dataList?.data?.cards[2]?.data?.data?.cards)
      }

      return restaurantList       
    
}

export default useRestaurant;