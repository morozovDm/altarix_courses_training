import React, { Component } from 'react';
import '../styles/SendMessageForm.css'
import MessageButton from '../resources/message.svg'

class SendMessageForm extends Component {
  state = {
    text: ''
  }

  onSubmitMessage = (e) => {
    e.preventDefault()
    if (this.state.text !== '')
      this.props.onSubmit(this.state.text)
    this.setState({
      text: ''
    })
  }

  onChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    return (
      <form className="SendMessageForm" onSubmit={this.onSubmitMessage}>
        <input type="text" ref="msg" placeholder='Input message...' value={this.state.text} onChange={this.onChange} />
        <button type="submit" value="Submit" ><img src={MessageButton} alt='msg-btn'></img></button>
      </form>
    );
  }
}

export default SendMessageForm;
