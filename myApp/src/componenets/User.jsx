import React, { useEffect, useState } from "react";
const User =(props) =>{
    const [count , setCount] =useState(0);
    const [count2] =useState(2);

    useEffect(()=>{
    //    const timers=setInterval(() => {
    //        }, 1000);
    //        console.log("useEffect");
    //        //return function will call when we unmounting this component
    //        return()=>{
    //         clearInterval(timers);
    //         console.log("useEffect return");
    //        };
        //API calls here
    }, []);
    // useEffect(()=>{

    // },[count2]);

    console.log("render");
    // async function getUserInfo(){
    //     const data= await fetch("https://api.github.com/users/AnugyaKumari");
    // };
    return (
        <div className="user-card">
            <h1>Count: {count}</h1>
            <h1>Count: {count2}</h1>
            <h2>Name: {props.Name}</h2>
            <h3>Locaion: Bihar</h3>
            <h4>Contact: @anugya3006</h4>
        </div>
    );
};

export default User;