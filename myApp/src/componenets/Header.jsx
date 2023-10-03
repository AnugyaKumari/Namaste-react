import React, { useState , useEffect} from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () => {

  // let btnName ="Login";
  //create a useState  variable
  const [btnNameReact , setBtnNameReact]  = useState("Login");

  //create avariiable to show online/offline
  const onlineStatus =useOnlineStatus();
  {/*==>if no dependency array => useEffect called on every component render.
  ==>if we have empty dep array =>useEffct called on initial render and just once when component is render for the first time.
==>if we have something in dep array =>useEffct called  when the dependency changes or {btnReact} is updated */}

  useEffect(()=>{
    console.log("useEffect called");} , [(btnNameReact)]);
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status:{onlineStatus ? "✅" : "🔴" }</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li> <Link to ="/grocery">Grocery</Link></li>
          <li><Link to ="/cart">Cart Items</Link></li>
          {/* display string variable inside jsx we use {} */}
          <button className="Login" onClick={()=> { 
            btnNameReact =="Login" ? 
            setBtnNameReact("Logout") : setBtnNameReact ("Login");
            console.log(btnNameReact);
}}
          >
          {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;