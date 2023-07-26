//write hello world using react js
//create heading in react
const heading = React.createElement(
  "h1",
  { className: "heads" },
  "Hello  World From react!"
);
const para = React.createElement("p", {}, "Hello React!");
//put this heading to root div as a children
const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(heading); //return js object
//Render the heading inside root
//here render will convert the heading object into h1 tag and put it into dom
root.render(para);
root.render(heading);
console.log(root);

/**Create Nested Element in react
    * 
    * 
   <div id ="parent">
       <div id ="child">
           <h1>i am from h1 tag</h1>
           <h2>i am from h2 tag</h2>
       </div>
       <div id ="child2">
           <h1>Anugya from h1 tag</h1>
           <h2>i am from h2 tag</h2>
       </div>
   </div>
   *
   *ReactElement(Object) ==>HTML(render change object to html that browser uderstand)
   * */
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "chid" },
    [
      React.createElement("h1", {}, "I am H1 tag"),
      React.createElement("h2", {}, "I am from H2 tag"),
    ]
    //to create sibling we will create an array of children
  ),
  React.createElement(
    "div",
    { id: "chid2" },
    [
      React.createElement("h1", {}, "I am H1 tags"),
      React.createElement("h2", {}, "I am from H2 tags"),
    ]
    //to create sibling we will create an array of children
  ),
]);

//JSX
console.log(parent); //object

//const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
