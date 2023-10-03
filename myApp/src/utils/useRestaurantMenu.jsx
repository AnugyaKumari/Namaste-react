import React from "react";
import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) =>{

//to store json data we use state variable so create useState here
const [resInfo,setResInfo]= useState(null)

// To fetch api data dynamically we use useEffect hook.It has 2arguments ,one is arrow fun and empty dependency array 
// bcz if we not declare then useEffect will be called everytime when my component will render.
useEffect(() =>{
    fetchData();
},[]);

//to fetch menu lets create async fun
const fetchData= async() =>{

    // const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=229&submitAction=ENTER"); //

    const data= await fetch(MENU_API + resId);

    //convert data into json
    const json = await data.json();
    setResInfo(json.data);

};
//resInfo is local variable for this hook
    return resInfo;
};

export default useRestaurantMenu;

