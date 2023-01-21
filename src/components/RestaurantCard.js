import { IMG_CDN_URL } from "../constants";

const RestrauntCard = ({
  name,cloudinaryImageId,cuisines,avgRating,
}) => {
  return (
    <div className="card restaurant-list">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} minutes</h4>
    </div>
  );
};

export default RestrauntCard;


  // this is by using props     
// const RestaurantCard = (props) => {
//   return (
//     <div className="card restaurant-list">
//         <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+ 
//         props.restaurant.data.cloudinaryImageId
//       }></img>
//         <h2> {props.restaurant.data.name}</h2>
//         <h3>{props.restaurant.data.cuisines.join( ' , ')}</h3>
//         <h3>{props.restaurant.data.avgRating} stars</h3>
//     </div>
// )
// }

//  this is destructuring using {restaurant} inplace of props as above and modified the attributes accordingly   
// const RestaurantCard = ({restaurant}) => {
//   return (
//     <div className="card restaurant-list">
//         <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+ 
//         restaurant.data.cloudinaryImageId
//       }></img>
//         <h2> {restaurant.data.name}</h2>
//         <h3>{restaurant.data.cuisines.join( ' , ')}</h3>
//         <h3>{restaurant.data.avgRating} stars</h3>
//     </div>
// )
// }
// const Body = () => (
//   <div className="restaurant-list">
//   <RestaurantCard restaurant = {restaurantList[0]}/>
//   <RestaurantCard restaurant = {restaurantList[1]}/>
//   <RestaurantCard restaurant = {restaurantList[2]}/>
//   <RestaurantCard restaurant = {restaurantList[3]}/>
//   <RestaurantCard restaurant = {restaurantList[4]}/>
//   </div>
  
//   )

//  this is by  using object inplace of props as above and modified the attributes accordingly   
// const RestaurantCard = ({name,cloudinaryImageId,cuisines,avgRating}) => {
//   return (
//     <div className="card restaurant-list">
//         <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+ 
//         cloudinaryImageId
//       }></img>
//         <h2> {name}</h2>
//         <h3>{cuisines.join( ' , ')}</h3>
//         <h3>{avgRating} stars</h3>
//     </div>
// )
// }
// const Body = () => (
//   <div className="restaurant-list">
//   <RestaurantCard name = {restaurantList[0].data.name} cuisines = {restaurantList[0].data.cuisines} cloudinaryImageId = {restaurantList[0].data.cloudinaryImageId}
//   avgRating = {restaurantList[0].data.avgRating}/>
//   <RestaurantCard name = {restaurantList[1].data.name} cuisines = {restaurantList[1].data.cuisines} cloudinaryImageId = {restaurantList[1].data.cloudinaryImageId}
//   avgRating = {restaurantList[1].data.avgRating}/>
//   <RestaurantCard name = {restaurantList[2].data.name} cuisines = {restaurantList[2].data.cuisines} cloudinaryImageId = {restaurantList[2].data.cloudinaryImageId}
//   avgRating = {restaurantList[2].data.avgRating}/>
//   <RestaurantCard  name = {restaurantList[3].data.name} cuisines = {restaurantList[3].data.cuisines} cloudinaryImageId = {restaurantList[3].data.cloudinaryImageId}
//   avgRating = {restaurantList[3].data.avgRating}/>
//   <RestaurantCard name = {restaurantList[4].data.name} cuisines = {restaurantList[4].data.cuisines} cloudinaryImageId = {restaurantList[4].data.cloudinaryImageId}
//   avgRating = {restaurantList[4].data.avgRating}/>
//   </div>  
//   )

