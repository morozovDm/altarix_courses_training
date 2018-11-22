import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Message from './Message.js'
import SendMessageForm from './SendMessageForm.js'
class Chatroom extends Component {
  
  username = "Morozov Dmitriy";
  
  constructor(props) {
    super(props);

    this.state = {
      messages: [{
        username: "Петр Петров",
        content: <p>Привет!</p>
      }, {
        username: "Петр Петров",
        content: <p>Как дела с JavaScript?</p>,

      }, {
        username: "Morozov Dmitriy",
        content: <p>(((</p>,

      }]
    };

    this.submitMessage = this.submitMessage.bind(this)
  }

  componentDidMount() {
    ReactDOM.findDOMNode(this.refs.messagesList).scrollTop = ReactDOM.findDOMNode(this.refs.messagesList).scrollHeight
  }

  componentDidUpdate() {
    ReactDOM.findDOMNode(this.refs.messagesList).scrollTop = ReactDOM.findDOMNode(this.refs.messagesList).scrollHeight
  }

  submitMessage(e) {
    this.setState({
      messages: this.state.messages.concat(
        {
          username: "Morozov Dmitriy",
          content: <p>{e}</p>,
        }
      )
    })
    console.log(this.state.messages)
  }

  render() {
    let { messages } = this.state;
    
    return (
      <div className="Chatroom">
        <ul className='messagesList' ref='messagesList'>
          {
            messages.map(message =>
              <Message message={message} user={this.username} />
            )
          }
        </ul>
        <SendMessageForm onSubmit={this.submitMessage} />
      </div>
    );
  }
}

export default Chatroom;
