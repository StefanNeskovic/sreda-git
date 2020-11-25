import './InputField.css'
const { Component } = require("react");


class InputField extends Component{

    constructor(props){
        super(props)
        this.state={
            text:''
        }
    }
    

    onChangeHandler(event){
        this.setState({text:event.target.value})
        this.props.bindInput(this.state.text)
    }

    render(){

        return(
            <div>
                <label>{this.props.text}</label>
                <input type='text' className='input-tag'  onChange={this.onChangeHandler.bind(this)} value={this.state.text}/>
            </div>
        )
    }

}

export default InputField;