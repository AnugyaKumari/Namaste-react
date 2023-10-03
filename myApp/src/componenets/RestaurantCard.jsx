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
        <div className="res-card" style={{backgroundColor:"rgb(205 192 192)"}}>
            {
             resData?.info?.cloudinaryImageId && <img 
              className="res-logo"
              height={200}
              alt ="res-logo" 
              src={CDN_URL + 
               cloudinaryImageId
              }
              //here cdn url will be same but cloudanary img id will be change so we concateniate it in js
              />
            }
            {/* props is just a js object so wrap it inside curly-braces */}
            {/* <h3>{props.resName}</h3> */}
            <h3>{name}</h3>
            <h4>{cuisines.join(" , ")}</h4>
            <h4>{avgRating}Stars</h4>
            <h4>₹{costForTwo}</h4>
            <button type="btn" onClick={handleAddToCart}>Add To Cart+</button>
            {/* <h4>{resData.info?.deliveryTime}minutes</h4> */}
        </div>
    );
};

export default RestaurantCard;