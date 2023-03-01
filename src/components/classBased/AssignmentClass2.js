import React from "react";

class AssignmentClass2 extends React.Component{

constructor(props) {
    super(props)
    console.log(props, 'props');
    this.state = {
        class2Count : 0 
    }

}
    
render() {
    return(
        <div>
            <h2> assignment class2 based</h2>
            <h3>{this.props.name}</h3>
            <button onClick={()=>{
             this.setState({class2Count:this.state.class2Count+1})
         }}>Onclick</button>   
           state variable  :  {this.state.class2Count}
        </div>
    )
}
}

export default AssignmentClass2;