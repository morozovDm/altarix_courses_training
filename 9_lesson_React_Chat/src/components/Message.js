import React, { Component } from 'react';
import icon from '../resources/anonymus.svg'
class Message extends Component {
  render() {
    return (
      <li className={`message ${this.props.user === this.props.message.username ? "right" : "left"}`}>
        <div class='msg-sender'>
          <img src={this.props.message.img ? this.props.message.img : icon} alt='anonymous'></img>
          <div>{this.props.message.username}</div>
        </div>
        <div class='msg-content'>
          {this.props.message.content}
        </div>
      </li>
    );
  }
}

export default Message;
