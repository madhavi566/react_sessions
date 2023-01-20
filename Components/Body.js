import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import {useState} from 'react';



function filterData(searchText,restaurants) {
  const filteredRestaurants =  restaurants.filter((item)=> item?.data?.name.toLowerCase().includes(searchText.toLowerCase()))
  return  filteredRestaurants;
}
const Body = () => {

  // const searchText = 'hello'
  // const [searchText, setSearchText] = useState();
  // const [searchClicked, setSearchClicked] = useState("false");

  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState(restaurantList);

  console.log('render')

  return (
      <div>
        <input type="text" placeholder="search" value = {searchText}
        onChange={(e)=>{setSearchText(e.target.value)}}/>
        <button onClick = {()=>{
          // filter the data 
          // update the restaurants list
          const data = filterData(searchText,restaurants);
          setRestaurants(data)
          }}> search </button>  
        <div className="restaurant-list">
        {
          restaurants.map((restaurant)=>{
            return <RestaurantCard {...restaurant.data} key = {restaurant.data.id}></RestaurantCard>
          })
        }
        </div>
      </div>
    )

};

export default Body;


// <h1>{searchClicked}</h1>
// if (searchClicked === "true") {
//   setSearchClicked("false")
//   } else {
//     setSearchClicked("true")
//   }
