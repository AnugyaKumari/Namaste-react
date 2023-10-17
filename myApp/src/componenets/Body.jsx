import React, { useEffect } from "react";
import RestaurantCard  ,{withPromotedLabel} from "./RestaurantCard";
import resLists from "../utils/mockData";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {
  //state variable - Super powerful variable (for that we use hook)
  //modify it by a function and apply set before it and it comes as second parameter in this array
  // const  [listOfrestaurants , setListOfRestaurants ] = useState([
  //   {
  //     info: {
  //       id: "685759",
  //       name: "The Rameshwaram Cafe",
  //       cloudinaryImageId: "c9b36413c755d072ec34619ee585bef4",
  //       areaName: "J P Nagar",
  //       costForTwo: "₹250 for two",
  //       cuisines: ["South Indian", "Dosa", "Idli", "Vada"],
  //       avgRating: 4.5,
  //       deliveryTime: 30,
  //     },
  //   },
  //   {
  //     info: {
  //       id: "685749",
  //       name: "Domino's Pizza",
  //       cloudinaryImageId: "lnexbppar5hnpl8xzwwu",
  //       areaName: "J P Nagar",
  //       costForTwo: "₹250 for two",
  //       cuisines: ["Pizza", "Italian", "Sweets", "Pastas"],
  //       avgRating: 3.8,
  //       deliveryTime: 30,
  //     },
  //   },
  //   {
  //     info: {
  //       id: "685739",
  //       name: "Nandhana Palace",
  //       cloudinaryImageId: "195876a3181ef63f76e45e3a7b49b585",
  //       areaName: "J P Nagar",
  //       costForTwo: "₹250 for two",
  //       cuisines: ["Mutton", "Biryani", "Andhra", "Sweets"],
  //       avgRating: 4.2,
  //       deliveryTime: 30,
  //     },
  //   },
  // ]);
  
  //create restaurantcard component which has promoted label
  const RestaurntCardPromoted = withPromotedLabel(RestaurantCard);
  
  //Now i will pass my mockData

  //after removing mockData
  const [listOfrestaurants ,setListOfRestaurants ]= useState([]);
  const [filteredReastaurants , setFilteredReastaurants] = useState([]);
  const [searchText , setSearchText] = useState("");

  //whenever state variable update ,react triggers a reconciliation cycle(re-render the component)
  console.log("body re-render", listOfrestaurants);
  //create own restaurants
  //   let listOfrestaurants2 = [
  //     {
  //       info: {
  //         id: "685759",
  //         name: "The Rameshwaram Cafe",
  //         cloudinaryImageId: "c9b36413c755d072ec34619ee585bef4",
  //         areaName: "J P Nagar",
  //         costForTwo: "₹250 for two",
  //         cuisines: ["South Indian", "Dosa", "Idli", "Vada"],
  //         avgRating: 4.5,
  //         deliveryTime: 30,
  //       },

  //     },
  //     {
  //     info: {
  //         id: "685749",
  //         name: "Domino's Pizza",
  //         cloudinaryImageId: "lnexbppar5hnpl8xzwwu",
  //         areaName: "J P Nagar",
  //         costForTwo: "₹250 for two",
  //         cuisines: ["Pizza", "Italian", "Sweets", "Pastas"],
  //         avgRating: 3.8,
  //         deliveryTime: 30,
  //       },
  //     },
  //     {
  //         info: {
  //             id: "685739",
  //             name: "Nandhana Palace",
  //             cloudinaryImageId: "195876a3181ef63f76e45e3a7b49b585",
  //             areaName: "J P Nagar",
  //             costForTwo: "₹250 for two",
  //             cuisines: ["Mutton", "Biryani", "Andhra", "Sweets"],
  //             avgRating: 4.2,
  //             deliveryTime: 30,
  //           },
  //     },

  //   ];

  //useEffect - it's a functiom which has 2arguments, 1st arrow fun & dependency array
  useEffect(() =>{
    fetchData();
    console.log("useEffect Work")
  }, []);

  //now write a function logic to fetch the data
  const fetchData =async ()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    //convert data to json(string to json)
    const json = await data.json();

    //console.log(json);

    //optional chaning
    const temp = json?.data?.cards ?? []
    
    const resList = temp.find(el=> el?.card?.card?.gridElements?.infoWithStyle?.restaurants?.length);
    setListOfRestaurants(resList.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredReastaurants(resList.card?.card?.gridElements?.infoWithStyle?.restaurants)
    console.log(resList.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  //for empty page put shimmer component
  //conditional rendering
  // if (listOfrestaurants.length==0){
  //  return <Shimmer />;
  // }

  //show online/offline msg
  const onlineStatus = useOnlineStatus();
  
  if (onlineStatus == false)
  return (
    <h1>Looks like you're offline!! Please check your internet connection;

    </h1>
    );

  //console.log("Body render", listOfrestaurants);
  //ternary operator
  return listOfrestaurants.length==0 ? <Shimmer /> :(
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input type="text" className="border border-solid border-black" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
          <button className="px-4 py-2 m-4 bg-green-300 rounded-lg" onClick={() =>{
            //Filter the restaurant card and update UI
            //searchText
            console.log(searchText);

            const filteredRestaurant = listOfrestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            console.log(filteredRestaurant);
            setFilteredReastaurants(filteredRestaurant);
            console.log(filteredRestaurant);
          }}
          >
            Search
        </button>
        </div>
        <div className="search m-4 p-4 flex items-center"> 
        <button
          className="px-4 py-2 m-4 bg-gray-300 rounded-lg"
          onClick={() => {
            //filter logic
            const filteredList = listOfrestaurants.filter(
              (restaurn) => restaurn.info.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated restaurants
        </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {/* {listOfrestaurants.map((resObj, i) => <RestaurantCard key={resObj.info.id} resData={resLists[i]} />)} */}
        
        {filteredReastaurants?.map((resObj) => (
          <Link 
          key = {resObj.info.id} to = {"/restaurant/" + resObj.info.id }
          >
            {/* if the restaurant is promoted add promoted label to it */}
            {resObj.info.promoted ? (<RestaurntCardPromoted resData ={resObj} /> ):( 
            <RestaurantCard  resData={resObj} /> )}
          </Link>
        ))}
        {/* <RestaurantCard  resData= {resLists[0]} />
                <RestaurantCard  resData= {resLists[1]} />
                <RestaurantCard  resData= {resLists[2]} />
                <RestaurantCard  resData= {resLists[3]} /> */}
      </div>
    </div>
  );
};

export default Body;
