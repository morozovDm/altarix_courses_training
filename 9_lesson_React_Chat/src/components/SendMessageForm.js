import React, { Component } from 'react';
import Chatroom from './Chatroom.js';
import MessageButton from '../resources/message.svg'
class SendMessageForm extends Component {
  render() {
    return (
      <form className="SendMessageForm" onSubmit={this.props.onSubmit}>
        <input type="text" ref="msg" placeholder='Input message...' />
        <button type="submit" value="Submit" ><img src={MessageButton}></img></button>
      </form>
    );
  }
}

export default SendMessageForm;
