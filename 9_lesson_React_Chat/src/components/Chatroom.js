import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Message from './Message.js'
import SendMessageForm from './SendMessageForm.js'
class Chatroom extends Component {
  username = "Morozov Dmitriy";
  state = {
    messages: [
      {
        id: Date.now() - 4,
        username: "Петр Петров",
        content: <p>Привет!</p>
      },
      {
        id: Date.now() - 3,
        username: "Петр Петров",
        content: <p>Как дела с JavaScript?</p>,
      },
      {
        id: Date.now() - 2,
        username: "Morozov Dmitriy",
        content: <p>(((</p>,
      },
      {
        id: Date.now() - 1,
        username: "Петр Петров",
        content: <p>Че?</p>,
      }]
  };

  componentDidMount() {
    ReactDOM.findDOMNode(this.refs.messagesList).scrollTop = ReactDOM.findDOMNode(this.refs.messagesList).scrollHeight
  }

  componentDidUpdate() {
    ReactDOM.findDOMNode(this.refs.messagesList).scrollTop = ReactDOM.findDOMNode(this.refs.messagesList).scrollHeight
    console.log(this.state)
  }

  submitMessage = (e) => {
    this.setState({
      messages: this.state.messages.concat(
        {
          username: "Morozov Dmitriy",
          content: <p>{e}</p>,
          id: Date.now()
        }
      )
    })
  }

  render() {
    let { messages } = this.state;
    return (
      <div className="Chatroom">
        <div className='MessagesList-container' ref='messagesList'>
          <ul className='messagesList' >
            {
              messages.map(message =>
                <Message message={message} user={this.username} />
              )
            }
          </ul>
        </div>
        <SendMessageForm onSubmit={this.submitMessage} />
      </div>
    );
  }
}

export default Chatroom;
