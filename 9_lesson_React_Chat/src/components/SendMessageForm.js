import React, { Component } from 'react';
import Chatroom from './Chatroom.js';
import MessageButton from '../resources/message.svg'
class SendMessageForm extends Component {
  constructor() {
    super()
    this.state = {
      text: ''
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmitMessage = this.onSubmitMessage.bind(this)
  }

  onSubmitMessage(e) {
    e.preventDefault()
    this.props.onSubmit(this.state.text)
  }

  onChange(e) {
    this.setState({
      text: e.target.value
    })
  }
  
  render() {
    return (
      <form className="SendMessageForm" onSubmit={this.onSubmitMessage}>
        <input type="text" ref="msg" placeholder='Input message...' onChange={this.onChange} />
        <button type="submit" value="Submit" ><img src={MessageButton}></img></button>
      </form>
    );
  }
}

export default SendMessageForm;
