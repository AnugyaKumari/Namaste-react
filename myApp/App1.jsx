import React from "react";
import ReactDOM from "react-dom/client";

const elem = <span>React Element</span>;

//React.createElment ==> Object ==> HtmlElement(render)
const heading = React.createElement("h1", { id: "heading" }, "Welcome Back!!");
console.log(heading);

//JSX -HTML Like or XML Like
//JSX ==>React.createElement(babel)==> ReactElement-JS Object ==>HTMLElement(after render)
//Jsx transpiled before it reaches to the js engine(transpiled means it convert the code that browser/react can understand.)

//const jsxHeading= <h1 id="heading"> React using JSX </h1>

//see how jsx is different from html,lets declare any class
const jsxHeading = (
  <h1 className="head" tabIndex="5">
    JSX is not HTML it looks like HTML!
  </h1>
);
console.log(heading);

//React Compenents- class component,functional component
//Functional component-
// for single line code we can skip return
//for multiple line wrap the code inside () with return or without

//Component composition- Composing of two component one in another.
const HeadComponent = () => (
  //wrap up inside a div
  <div id="container">
    {/* call function inside jsx */}
    {Titles()}
   <Titles />
    <Titles></Titles>
    {1000 + 50388}
    <h1 className="heading">This is Functional component from React </h1>
  </div>
);

//let's make two component and render it inside container

//functional component
const Titles =() => (
  <h1 className="newhead" tabIndex = "4">
    {elem}
    This is another Title component
    {/* <HeadComponent /> */}
  </h1>
);

//we can put JS inside jsx within the curly braces {}
const num = 100000;

//Put heading inside div
//create a root inside react

const root = ReactDOM.createRoot(document.getElementById("root"));

//render root to convert react object to html
//root.render(heading);
//root.render(jsxHeading);

//render functional component
root.render(<HeadComponent />);
//root.render(Titles);
