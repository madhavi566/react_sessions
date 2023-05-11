import React from "react";

class ProfileClass1 extends React.Component {
constructor(props) {
    super(props)
    console.log(props, 'props in constructor');
}

render() {
    return (
        <div>
            <h2> Profile class 1 class based</h2>
            <h3>{this.props}</h3>    
        </div>
    )
}


}

export default ProfileClass1;