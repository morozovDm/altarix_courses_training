import React, { Component } from 'react';
class Message extends Component {
  render() {
    return (
      <li className={`chat ${this.props.user === this.props.chat.username ? "right" : "left"}`}>
          <div class='msg-sender'>
            <img src='this.props.chat.img'></img>
            <div>{this.props.chat.username}</div>
          </div>
          <div class='msg-content'>
           {this.props.chat.content}
          </div>
      </li>
    );
  }
}

export default Message;
