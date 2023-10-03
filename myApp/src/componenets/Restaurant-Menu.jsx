import React from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () =>{

    //useParam Hook
    const {resId} = useParams();
    // console.log(useParams);
    const resInfo = useRestaurantMenu(resId);
    


    const  {name ,cuisines,costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info || {};
    //console.log(name);
    
    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card || {};
    console.log(itemCards);

    //create Shimmer component using ternary operator
    return resInfo ==null? (
        <Shimmer />
    ):(
        <div className="menu">
           <h1>{name}</h1>
            <p>
            {cuisines.join(",")} - {costForTwoMessage}
            </p>
            <h2>Menu</h2>
            <ul>
                {/* map function to iterate items name */}
                {itemCards?.map((item) => (
                <li key={item?.card?.info?.name}>
                {item?.card?.info?.name} - {"RS. "}
                {item?.card?.info?.price /100}
                </li>
        
                ))}
                {/* <li>{itemCards[0].card.info.name}</li>
                <li>{itemCards[1].card.info.name}</li>
                <li>{itemCards[2].card.info.name}</li>
                <li>{itemCards[3].card.info.name}</li> */}
            </ul>
        </div>
    );
};
export default RestaurantMenu;