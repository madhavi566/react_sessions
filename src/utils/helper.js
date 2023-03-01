export function filterData(searchText,restaurants) {
    const filteredRestaurants =  restaurants.filter((item)=> item?.data?.name.toLowerCase().includes(searchText.toLowerCase()))
    return  filteredRestaurants;
  }