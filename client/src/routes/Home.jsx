import React from "react";
import Header from "../compontents/Header";
import AddRestaurant from "../compontents/AddRestaurant";
import RestaurantList from "../compontents/RestaurantList";
const Home = () => {
  return (
    <div>
      <Header></Header>
      <AddRestaurant></AddRestaurant>
      <RestaurantList></RestaurantList>
    </div>
  );
};

export default Home;
