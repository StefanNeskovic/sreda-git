import './Message.css'
import Subject from './Subject'
import Body from './Body'
const { Component } = require("react");


class Message extends Component{

    constructor(props){
        super(props)

    }
    render(){

        return(
            <div className='message-div'>
                <Subject text={this.props.stateObj.subjectText}/>
                <hr/>
                <Body text={this.props.stateObj.bodyText}/>
            </div>
        )
    }

}

export default Message;