import Form from './FormComponents/Form'
import Message from './MessageComponents/Message'
import './App.css';
import { Component } from 'react';

class App extends Component{

  state={
    subjectLabel:'Input subject:',
    bodyLabel:'Input body:',
    subjectText:'',
    bodyText:''
  }

  renderState(stateObject){
    this.setState({subjectLabel:this.state.subjectLabel,bodyLabel:this.state.bodyLabel,subjectText:stateObject.subjectText,bodyText:stateObject.bodyText})
  }

  render(){
    return(
        <div className='app-page'>
          <Form stateObj={this.state}  />
          <Message stateObj={this.state} bindForm={this.renderState.bind(this)}/>
        </div>
    )
  }
} 

export default App;
