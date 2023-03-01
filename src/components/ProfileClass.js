import React from 'react';

class Profile extends React.Component {
        // how to set state variable 
constructor(props) {
    super(props)
    this.state = {
        userInfo:{
            login : '',
            avatar_url : ''
        }
    }
    console.log("child constructor" + props.name);
}

// api calls
// async componentDidMount() {
//     console.log("child component did mount"  + this.props.name);
// API calls 
//     const data = await fetch("https://api.github.com/users/madhavi566")
//     const json = await data.json();
// console.log(json, 'json');
//     this.setState({
//         userInfo : json 
//     })
// }

componentDidMount() {
    this.timer = setInterval(()=>{console.log("did mount interval");},1000)
    console.log("child component did mount"  + this.props.name);
}
componentDidUpdate() {
    console.log("component did update");
}


// old way depdending on two state varaibles 
// componentDidUpdate(prevstate, nextState ,
//     prevstate2, nextState2 , prevSate3,nextState3 ,
//     prevSate4,nextState4) {
//     if(prevstate !== nextState || prevstate2 !== nextState2) {
//         // code
//     }
//     if(prevSate3 !== nextState3 || prevSate4 !== nextState4) {
//         // code
//     }
//     console.log("component did update");
// }
// clear the interval here
componentWillUnmount(){
    clearInterval(this.timer);
    console.log("component will unmount");
}

render() {
    console.log("child render"  + this.props.name);

    const {count} = this.state 
    return (
        <>
        <h1> Profile class component</h1>
        <h2>Name : {this.state.userInfo.login} </h2>
        <h2>Avatar : {this.state.userInfo.avatar_url} </h2>

        {/*
            Never ever do this , bad way of mutating the state variable
            use setstate since react tracks this        
        <h2>state variable : {this.state = something} </h2> */}
        {/* <h2>count : {count}</h2> */}
        {/* <button onClick={()=>
             this.setState({
                 count:1
             })
        }>
           Set State 
        </button> */}
    </>
    )
}
}

export default Profile