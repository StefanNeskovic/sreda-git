const { Component } = require("react");


class Body extends Component{

    render(){

        return(
            <div>
               <p><i>{this.props.text}</i></p> 
            </div>
        )
    }

}

export default Body;