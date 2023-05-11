import React from "react";

class AssignmentClass extends React.Component{

constructor(props) {
    super(props)
    console.log(props, 'props');
    this.state = {
        class1Count : 0 ,
        class1Decr : 0 
    }
}
    
render() {
    return(
        <div>
            <h2> assignment class based</h2>
            <h3>{this.props.name}</h3>
         <button onClick={()=>{
             this.setState({class1Count:this.state.class1Count+1})
         }}>Increment</button>   
         <button onClick={()=>{
             this.setState({class1Decr:this.state.class1Count--})
         }}>Decree</button>   

                      <h4>  state variable: {this.state.class1Count}</h4>
     
        </div>
    )
}
}

export default AssignmentClass;