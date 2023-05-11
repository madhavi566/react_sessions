import { Outlet } from "react-router-dom";
// import Profile from "./Profile";
import ProfileClass from "./ProfileClass"
import ProfileFunctionalComponent from "./Profile";
import React from "react";

// const About = () => {
//     return (
//         <>
//         this is about 
//         {/* <Outlet/> */}
//         {/* // this also works in the path 
//         <Profile/> */}
//         <h3> class </h3>
//         <Profile name={"Madhavi"}/>
//         <h3> functional </h3>
//         <ProfileFunctionalComponent name={"Madhavi"}/>
//         </>
//     )
// }


class About extends React.Component {
    constructor(props) {
        super(props);
        // console.log("parent-constructor");
    }

    componentDidMount() {
        // console.log("parent - ComponentDidMount");
    }

    render() {
        // console.log("parent-render");
    return(        <>
        this is about 
        <h3> class </h3>
        {/* <ProfileClass name={"child1"}/> */}
    <ProfileFunctionalComponent name={"Madhavi"}/> 
       
        
         {/* <ProfileClass name={"child2"}/>
                 <h3> functional </h3>
        <ProfileFunctionalComponent name={"Madhavi"}/> */}
        </>
        )

    }

}
export default About;