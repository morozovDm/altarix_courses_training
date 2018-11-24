import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../styles/Chatroom.css'
import Message from './Message.js'

class Chatroom extends Component {
 
  componentDidMount() {
    console.log(ReactDOM.findDOMNode(this.refs.messagesList))
    ReactDOM.findDOMNode(this.refs.messagesList).scrollTop = ReactDOM.findDOMNode(this.refs.messagesList).scrollHeight
  }

  componentDidUpdate() {
    ReactDOM.findDOMNode(this.refs.messagesList).scrollTop = ReactDOM.findDOMNode(this.refs.messagesList).scrollHeight
  }

  render() {
    let { messages } = this.props;
    return (
      <div className="Chatroom">
        <div className='MessagesList-container' ref='messagesList'>
          <ul className='messagesList' >
            {
              messages.map(message =>
                <Message key={message.id} message={message} user={this.props.username} />
              )
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default Chatroom;
