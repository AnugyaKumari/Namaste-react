1.Crossorigin- The crossorigin attribute sets the mode of the request to an HTTP CORS Request.
2.NPM- It will manage all the package which we will install to our system 3.**package.json-it's a configuration for npn 4.**Bundler - webpack,parcel,vite are bundlers,it basically bundle or package our app properly so that it can be shift to production.
\*Bundler-A bundler in React is a tool that allows developers to package their code into a single file or bundle.
This bundle can then be used to run the application in the browser.
Bundlers are used to reduce the size of the code and improve the performance of the application.
5.Dependency- we have 2 types of dependency.
1.devDependency- It consists of all the packages that are used in the project in its development phase and not in the production or testing environment. 2. peerDependency - It consists of all the packages that are exactly required in the project or to the person who is downloading and the version numbers should also be the same.It's used in production also.
6.Difference between tilde ( ~ ) and caret ( ^ ) in package.json
-->Tilde is used to match the most recent patch version. Tilde ~ notation freezes the major version and minor version.
-->Caret (^) notation: It is used for automatically updating the minor updates along with patch updates.
7.Difference between package.json and package-lock.json files.
package.json -->It contains basic information about the project.It is mandatory for every project.   
 It records important metadata about the project.It contains information such as name, description, author, script, and dependencies.

    package-lock.json--> It describes the exact tree that was generated to allow subsequent installs to have the identical tree.
    It is automatically generated for those operations where npm modifies either node_modules tree or package.json.
    It allows future devs to install the same dependencies in the project.It contains the name, dependencies, and locked version of the project.

8\*\*Parcel- It create local server and also refresh browser(HMR).HMR-Hot module replacement.
Parcel has File watching Aklgorithn-written in c++.
Parcel-cache-It has Caching - To run code faster,it helps to image optimization,bundling,minification,compress file,error handling,HTTPs,
Tree shaking - Parcel remove unused code for us.They have different dev and prod bundles bcz they take different time
Building app using parcel- npx parcel index.html
npx- To execute a package we use npx parcel...

9.How to create h1 tag using JSX?
It's not html in js ,it looks like -HTML or XML syntax
Jsx transpiled before it reaches to the js engine(transpiled means it convert the code that browser/react can understand.)
//transpiled is done by parcel called babel
//babel convert jsx to react code
Ex- const jsxHeading = <h1 i="heading">hello world</h1>
\*Babel- it also transpiled the ES6 code to a code that older browser understand.
Babel-Babel is a free and open-source JavaScript transcompiler that is mainly used to convert ECMAScript 2015+ code into backwards-compatible JavaScript code that can be run by older JavaScript engines.
Q.How do i write a image tag inside jsx,how do i write anchor tag?

Q.How o write JSX in multiple line.
A-We have to wrap our code inside ().
Ex-const jsxHeading = (<h1 className="head" tabIndex="5" >JSX is not HTML it looks like HTML!</h1>);
React Component-
1.Class component- It is old version,we use class here
2.Functional Component - It's the newest component where we use function.It start with caps letter.
It's normal js function which return some jsx element.or a function which retur react element is functional component.
Ex- for single line code we can skip return
// const HeadComponent = () =><h1>This is Functional component from React </h1>;
For multi line-
// const HeadComponent = () =>(

<h1>This is Functional component from React </h1>
);

\*How to convert react element to functional component
=> change he name to caps and make it arrow function.
Q.What is component composition?
A- Composing of two component one in another.

\*If we put curly braces{} anywhere inside jsx we can run our JS code inside it.

10.Props- It's full form is properties,it's normal arguments to a function.
Passing a props to a component is similar to passing an arguments to a js function.
11.Config Dven UI
In a configuration-driven UI, the layout, styles, and other properties of UI elements are defined in a configuration file or database, which can be easily modified without requiring changes to the codebase.
**In array to add comma in react or js we use join(" , ")
**whenever use .map or looping anything always give a key. --bcz if we not write key and new things added thn react will rerender everything which is bad for production.
ASK-{resLists.map((resObj, i) => <RestaurantCard key={resObj.info.id} resData={resLists[i]} />)}

12.Never use index in Key .
We don’t recommend using indexes for keys if the order of items may change. This can negatively impact performance and may cause issues with component state.

13.Types of Export/Import-
(1)Default Export/Import - By default a file can export only one thing or To export single file we use default export/import.
Ex- export default component/variable;
import component/variable from "path";
(2)Named Export/Import- To export multiple things in same file we use named export/imort.
Ex- import { LOGO_URL } from "./utils/constants"; {named export} from "path";
export const CDN_URL= "https://media-assets.swiggy.com/swiggy/image/upload/";
14.filter -to filter our data we use this
Ex-listOfrestaurants = listOfrestaurants.filter(
(restaurn) =>restaurn.info.avgRating > 4
);

15.If we want to shink/tied data layer and UI layer to each other we use react framework(Hook).

16.Hook- It's normal JS Utility function that we can use to isolate the reusable part from a functional component.
Whenever a function starting with "use" that means it's a hook.

Most Important hooks-
(1).useState() - Superpowerful State variables in react
Ex- /modify it by a function and apply set before it and it comes as second parameter in this array
let [listOfrestaurants , setListOfRestaurants] = useState([..data ...]);
-->whenever a state variable updated react will re-render the components.as soon our data layer will update our UI will also update.
-->Always called usestate inside ur body not outside.
-->Never create ur hook (useState,useEffect) inside if,else bcz it create inconsistency in program.
-->Don't do that inside function and also inside for loop.

(2).useEffect() -

17.Reconciliation algorithm (React Fiber) in react- the diff algoritham check old VDOM and new VDOM and then it update the actual DOM.
Virtual DOM -we have Virtual DOM(object) It's the representation of actual DOM.

Or,The algorithm React uses to diff one tree with another to determine which parts need to be changed.

Why react is Fast?
Ans- Bcz it has virtual Dom also it has diff algoritham which is very efficient DOM manipulation ,it can find out the difference(betw old dom and new dom) and update the UI fast.

18.Monolith Architect

Read- https://github.com/acdlite/react-fiber-architecture

19.How web app/ui application fetch the data from backened? Here we will see two approach.
Ans- (1). As soon as the page load our app page load we can make an api call and when we get the data then we can render it on to the UI.
(2).As soon as the page load we will quickly render the UI,then we will make an api call and as soon as we get the result from api we will now rerender our appl. with the data from api once again.
--> In react we will always use 2nd approach.

20.useEffect- It's simple function with two arguments, one is arrow function or call back function and 2nd argument is dependency array.
or, when the body funcion will render it will render it and as soon as render cycle will finish after this quickly it will call this call back function.
Now we will fetch the data inside useEffect.

==>if no dependency array => useEffect called on every component render.
Ex- useEffect (() => {
console.log("useEffect called");
});
==>if we have empty dep array =>useEffct called on initial render and just once when component is render for the first time.

Ex- useEffect (() => {
console.log("useEffect called");
} , []);

==>if we have something in dep array =>useEffct called when the dependency changes or {btnReact} is updated
Ex- useEffect (() => {
console.log("useEffect called");
} , [{btnReact} ]);

21.What is fetch () and how is it used?
In JavaScript, the fetch() method is used to make asynchronous requests to the server and load the information that is returned by the server onto the web pages.
Fetch will return promise , we will make function to async await and then we will await for data to come.
And once we have data we have to convert it to json.

\*\*Remove mockData
const [listOfrestaurants ,setListOfRestaurants ]= useState(resLists);
const [listOfrestaurants ,setListOfRestaurants ]= useState([]);

22.Shimmer UI -Instead of showing loading screen we can show a fake page/skeleton untill we get the data from the api.
23.Conditional Rendering - Rendering on the basis of conditions.

\*\*const [btnNameReact , setBtnNameReact] = useState("Login");
==> here useState given us a variable btnNameReact and also a function setBtnNameReact to update the variable.
//here we call set function wiith updated value and whenever the state variable will change react will re-render the header component and show updated value.

       <button className="Login" onClick={()=> {
            setBtnNameReact("Logout");
            console.log(btnNameReact);
          }}
          >
            {btnNameReact}
          </button>

24.Router Provider - it provide the routing configuration to our app.
\*\*\*- rafce -shortcut to create componentin vs code

24.errorElement - we use this to show error component.
25.useRouteError -This is a hook given by react-router-dom,we use this to catch any errors that may occur during routing.
OR,nside of an errorElement, this hook returns anything thrown during an action, loader, or rendering.
we can read the error and show the speific details of error to user.
Ex- rout fail error, network error, page not found error etc.

26.Outlet - whenever there is any change in the path so outlet will be filled with the children according to the path or what page we are. 27.<Link to="/"> - we use Link to ,to route to other page. It will not reload the full page while it just refresh the component.
Here we can't use <a> tag to route another page because it refresh whole page.

27.<Link to="/"> - we use Link to ,to route to other page. It will not reload the full page while it just refresh the component.
Here we can't use <a> tag to route another page because it refresh whole page.
28.SPA(Single Page Application)- It's just one page where components get interchange via client side routing.

29.Two types of Routing in web app:-
1.Server Side Routing -
-->if we click on our <a> tag it reloads the whlole page and send the network call to html and fetches the html data and render to the webpage.
OR, we make a network call and the page is coming from server.
2.Client Side Routing
--> Here we are not making any network calls while we are moving our page because all the components are already loaded when we loaded our component for the first time into our app.

**API-MENU-
https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=229&submitAction=ENTER

Class-based-Component- A class base component is  a class wich extend React.component and it has a render method which return some piece of JSX.
render() return jsx, and this jsx converted to html and render to the web page.

30.Why do we use super(props)?
Ans- They use it to call the superclass method as well as access the superclass constructor.
The fundamental difference between super() and super(props) is that super() is used to call the parent constructor, whereas, super(props) would pass the props to the parent constructor.

31.Class-based component
32**.Lifecycle of class-based component OR how this class based comp is mounted on webpage?
-->when the class load or instantiated a constructor is load or called then render is called
When the parent pages/component is loaded ,parent constructor is initialised a new instance of the class is created so the constructor of the parent is called then render od this parent is called,
then it goes to the children and again trigger the lifecycle and now constructor of child will be called then the render of the child will be called.
And once the class based component is mounted on to the dom/browser then this componentDidMount is called

33.Why we make an api call inside componentDidMount ?
Ans-We use componentDidMount to make an api call inside it because in class based component to quickly render the component and then make API call and fill the data we use componentDidMount.

**OR,React has 2phases - Render Phase and Commit Phase, In render phase when the component is Mounting Constructor will be called and the Render will be call and then the React Updates the DOM,
and then componentDidMount  will be called.

==>componentDidUpdate
1st- In Mounting phase 1st constructor will call then 2nd render will called(with dummy data) Now webpage will loaded(dummy data will reflect for few milisecond)
3rd-- then componentDidMount will called we make an API call inside CDM after that we do this.setState(class comp) this is for Mounting Life-cycle.
Now once the Mounting cycle finish this.setState()(state variable updated with new data) will called and it trigger the reconcilation update cycles and render method call again with the updated data.
Again react updated the html DOM with new updata data and it will call componentDidUpdate, this is how whole life cycle works.

==>When we will use componentWillUnmount/cleanup function?
This is called just before our component is unmount(disappear) or when we leave to one page to another it will call.
 -->ClaerInterval= /we use this.timer=clearInterval to stop setinterval repeating.

34.Why async callbacks cannot be used in useEffect. 
==>This is because the useEffect hook expects its effect function to return either a cleanup function or nothing 

35.Custom Hooks-

36.postcss -PostCSS is a software development tool that uses JavaScript-based plugins to automate routine CSS operations.