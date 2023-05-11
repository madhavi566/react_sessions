import { useState } from "react";

const Assignment8 = (props) => {

const [count,setCount] = useState(0)
const [dount,setDount] = useState(0);

console.log(props, ' in funcitona component');
return (
<>
<h2> This is functional component</h2>
<h3> props from parent :  {props.name}</h3>    
<button onClick={()=>{
    setCount(count + 1)
}}> Count </button>
<button onClick={()=>{
    setDount(count - 1)
}}> decrease count </button>

count :  increased by   {count} 
dount :  decreased by  {dount}
</>
)

}

export default Assignment8;