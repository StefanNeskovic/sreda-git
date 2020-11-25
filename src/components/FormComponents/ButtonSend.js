import './ButtonSend.css'
const { Component } = require("react");


class ButtonSend extends Component{

    render(){

        return(
            <div>
               <button className='button-tag'>Send message</button> 
            </div>
        )
    }

}

export default ButtonSend;