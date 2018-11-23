import React, { Component } from 'react';
import '../styles/Message.css'
import ClassNames from 'classnames'
import icon from '../resources/anonymus.svg'

class Message extends Component {

  componentDidMount(){
    console.log(this.props.user,this.props.user === this.props.message.username,this.props.message.username)
  }

  render() {
    var msg = ClassNames({
      message: true,
      right: this.props.user === this.props.message.username,
      left: !this.props.user === this.props.message.username
    });
    return (
      <li className={msg}>
        <div className='msg-sender'>
          <img src={this.props.message.img ? this.props.message.img : icon} alt='anonymous'></img>
          <div>{this.props.message.username}</div>
        </div>
        <div>
          <div className='msg-content'>
            {this.props.message.content}
          </div>
            {this.props.message.time}
        </div>
      </li >
    );
  }
}

export default Message;
