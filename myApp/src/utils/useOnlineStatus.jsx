import { useEffect, useState } from "react";

const useOnlineStatus = () =>{

    //create useState
    const [onlineStatus , setOnlineStatus]= useState(true);
    
    //check if online
    useEffect(() =>{
        window.addEventListener("offline" ,() =>{
            setOnlineStatus(false);
        });
        window.addEventListener("online" , () =>{
            setOnlineStatus(true);
        });
    }, []);
    //event listener will track when internet is online and offline and return the status

    //boolean value
    return onlineStatus;
}
export default useOnlineStatus;