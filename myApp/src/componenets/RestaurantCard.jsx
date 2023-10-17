import React from "react";
import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props)=>{
    const { resData}=props;

    const {cloudinaryImageId,name, avgRating, cuisines, costForTwo} = resData?.info;

    const handleAddToCart = (e)=>{
        e.preventDefault();
        
    }
    //console.log(resData)
    return (
        <div className="m-4 p-4  h-full w-[250px] rounded-lg bg-gray-200 hover:bg-gray-500">
            {
             resData?.info?.cloudinaryImageId && 
             <img 
              className="rounded-xl"
              alt ="res-logo" 
              src={CDN_URL + 
               cloudinaryImageId
              }
              //here cdn url will be same but cloudanary img id will be change so we concateniate it in js
              />
            }
            {/* props is just a js object so wrap it inside curly-braces */}
            {/* <h3>{props.resName}</h3> */}
            <h3 className="hover:text-white font-bold py-4 text-lg">{name}</h3>
            <h4 className="hover:text-white">{cuisines.join(" , ")}</h4>
            <h4 className="hover:text-white">{avgRating}Stars</h4>
            <h4 className="hover:text-white">₹{costForTwo}</h4>
            {/* <button type="btn" onClick={handleAddToCart}>Add To Cart+</button> */}
            {/* <h4>{resData.info?.deliveryTime}minutes</h4> */}
        </div>
    );
};

//Higher Order Component

//input - RestaurantCard ==> o/p RestaurantCardPromoted
export const withPromotedLabel = (RestaurantCard) =>{
    return (props) =>{
        return (
            <div>
                <label>Promoted</label>
                {/* if we give spread operator that means we are passing all the props to it */}
                <RestaurantCard {...props} />
            </div>
        )
    }
}

export default RestaurantCard;