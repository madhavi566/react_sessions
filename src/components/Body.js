import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import {useEffect, useState} from 'react';
import Shimmer from "./Shimmer";
import {Link} from 'react-router-dom';
import {filterData} from "./../utils/helper"
import useRestaurant from "../utils/useRestaurant";

const Body = () => {
  // const searchText = 'hello'
  // const [searchText, setSearchText] = useState();
  // const [searchClicked, setSearchClicked] = useState("false");

  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);

  
  useEffect(()=>{
    getRestaurants();
  },[])

    async function getRestaurants() {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
      const dataList = await data.json();
    setAllRestaurants(dataList?.data?.cards[2]?.data?.data?.cards)   
    setFilterRestaurants(dataList?.data?.cards[2]?.data?.data?.cards)   
    console.log(dataList?.data?.cards[2]?.data?.data?.cards, 'dataList');    
    }


    if(!allRestaurants) return null;

    // we are using conditional rendering here 
    // when restaurants data loading call the shimmer
    return (filterRestaurants.length === 0 ? <Shimmer/>  :  (
      <div>
        <input type="text" placeholder="search" value = {searchText}
        onChange={(e)=>{setSearchText(e.target.value)}}/>
        <button onClick = {()=>{
          // filter the data 
          // update the restaurants list
          const data = filterData(searchText,allRestaurants);
          setFilterRestaurants(data)
          }}> search </button>  
        <div className="restaurant-list">
      { !filterRestaurants ? <h1>No results found</h1> : ''}
        {
          filterRestaurants.map((restaurant)=>{
            return <Link to={'/restaurant/' + restaurant.data.id} key = {restaurant.data.id}><RestaurantCard {...restaurant.data} ></RestaurantCard></Link>
          })
        }
        </div>
      </div>
    )

    )

};

export default Body;


// <h1>{searchClicked}</h1>
// if (searchClicked === "true") {
//   setSearchClicked("false")
//   } else {
//     setSearchClicked("true")
//   }
