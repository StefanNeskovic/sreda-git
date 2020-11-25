import './Form.css'
import InputField from './InputField'
import ButtonSend from './ButtonSend'
const { Component } = require("react");


class Form extends Component{

    constructor(props){
        super(props)
        this.state={
            subjectText:'',
            bodyText:''
        }

    }

    changeSubject(text){
        this.setState({subjectText:text,bodyText:this.state.bodyText})
        this.props.bindForm(this.state)
    }

    changeBody(text){
        this.setState({subjectText:this.state.subjectText,bodyText:text})
        this.props.bindForm(this.state)
    }
    
    render(){

        return(
            <div className='form-div'>
                
                <h3>Send message:</h3>
                <InputField text={this.props.stateObj.subjectLabel} val={this.props.stateObj.subjectText} bindInput={this.changeSubject.bind(this)}/>
                <InputField text={this.props.stateObj.bodyLabel} val={this.props.stateObj.bodyText} bindInput={this.changeBody.bind(this)}/>
                <ButtonSend/>
            </div>
        )
    }

}

export default Form;