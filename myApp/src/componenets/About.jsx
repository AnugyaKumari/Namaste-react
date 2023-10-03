import React from "react";
import User from "./User";
import Header from "./Header";
import UserClass from "./UserClass";

//class-based component
class About extends React.Component {
    constructor(props){
        super(props);
        //console.log("Parent-Constructor");
    }
    componentDidMount() {
      //best place to make an API call
      //console.log("Parent ComponentDidMount");
  };
  render() {
    //console.log("Parent-Render");
    return (
      <React.Fragment>
        <div>
          <h1>About Class-component</h1>
          <h2>This is my Food-Restaurant about page</h2>
          {/* <User Name={"Anugya Singh(Functional)"} /> */}
          {/* <UserClass Name={"Anugya Singh(Class-based)"} Location={"Khagaria"} /> */}
          <UserClass name={"First"} location={"Khagaria Class"} />
          {/* <UserClass name={"Second"} location={"US"} />
          <UserClass name={"Third"} location ={"UK"} /> */}
          {/* <User /> */}
        </div>
      </React.Fragment>
    );
  }
}

// //functional component -which has arrow function and it will return jsx code
// const About = () => {
//   return (
//     <React.Fragment>
//       <div>
//         <h1>About</h1>
//         <h2>This is my Food-Restaurant about page</h2>
//         {/* <User Name={"Anugya Singh(Functional)"} /> */}
//         <UserClass Name={"Anugya Singh(Class-based)"} Location={"Khagaria"} />
//       </div>
//     </React.Fragment>
//   );
// };

/* 
    Parent Constructor
    Parent Render
    First Child Constructor
    First Child Render
    Second Child Constructor
    Second Child Render

    DOM Update after this then componentDidMount occur

    First Child ComponentDidMount
    Second Child ComponentDidMount
    Parent componentDidMount
*/

export default About;
