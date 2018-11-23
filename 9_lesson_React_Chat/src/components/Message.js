import React, { Component } from 'react';
import ClassNames from 'classnames'
import icon from '../resources/anonymus.svg'
class Message extends Component {
  render() {
    var msg = ClassNames({
      message: true,
      right: this.props.user === this.props.message.username,
      left: !this.props.user === this.props.message.username
    });
    return (
      <li className={msg}>
        <div class='msg-sender'>
          <img src={this.props.message.img ? this.props.message.img : icon} alt='anonymous'></img>
          <div>{this.props.message.username}</div>
        </div>
        <div class='msg-content'>
          {this.props.message.content}
        </div>
      </li >
    );
  }
}

export default Message;


