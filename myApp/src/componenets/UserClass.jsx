import React from "react"
class UserClass extends React.Component {
    constructor(props){
    super(props);

    //create useState to update data
    this.state ={ 
        // count: 2,
        // count2: 4,
        userInfo:{
            name:"Random",
            location:"Default",
            // avatar_url:"https/img.com",
        },
    };
//console.log(this.props.name + "Child-Constructor");
//first constructor is called thn render method called
//once the class based component is mounted on to the dom/browser then this componentDidMount is called
}
//call API to do this make cdm to async
async componentDidMount() {
    //console.log(this.props.name +"Child ComponentDidMount");

    const data= await fetch("https://api.github.com/users/AnugyaKumari");
    const json= await data.json();

    //update state variable after got data inside my api call
    this.setState({
        userInfo:json,
    });

    console.log(json);
};

//cons of single page application and CDU
componentDidUpdate(){
    // this.timer=setInterval(() => {
    //  console.log("Anugya Singh OP")  
    // }, 1000);
    console.log("Component Did Update");
}
componentWillUnmount(){
    //we use this.timer=clearInterval to stop setinterval repeating
    // clearInterval(this.timer);
    console.log("componentWillUnmount");
}
    render (){

        const {name, location,avatar_url} =this.state.userInfo;

        const {count}= this.state;
        //console.log(this.props.name + "Child-Render");
        return (
            
            <div className="user-card">

                {/* <h1>Count: {count}</h1> */}
                {/* update state variable using setState in class based component*/}
                {/* <button onClick={()=> {
                    this.setState({count:this.state.count+1,
                    });
                }}>Increase Count
                </button> */}
                {/* <h1>Count2:{count2}</h1> */}
                <img src={avatar_url} />
                <h2>Name:{name}</h2>
                <h3>Locaion: {location}</h3>
                <h4>Contact: @anugya3006</h4>
               
            </div>
        );
    };
};



export default UserClass;