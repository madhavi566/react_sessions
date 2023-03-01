import { useEffect, useState } from "react";

const Profile = (props) => {
    const [count1,setCount] = useState(0)
    // for one state count1 variable
    // useEffect(()=>{
    //     console.log("use effect");
    // },[count1,dummy])
    // for another state count2 variable
    // useEffect(()=>{
    //     console.log("use effect");
    // },[count2])
    useEffect(async()=>{
       const timer = setInterval(()=>{
            console.log("timer functional component");
        },1000)
    console.log("use effect");
    return () =>{
        clearInterval(timer);
        console.log("use effect return");
    };
    },[])

    console.log("render");

    return (
        // how to set state variable 
    <div> 
         I'm profile functional component ---
          {props.name}
        <h2> state variable 1 - {count1}</h2>
        <button onClick={()=>{setCount(1)}}>Set State</button>
    </div>
   
    )
}

export default Profile;