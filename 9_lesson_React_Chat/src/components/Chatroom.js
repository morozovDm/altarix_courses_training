import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Message from './Message.js'
import SendMessageForm from './SendMessageForm.js'
class Chatroom extends Component {
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
    ReactDOM.findDOMNode(this.refs.messages).scrollTop = ReactDOM.findDOMNode(this.refs.messages).scrollHeight
  }

  submitMessage(e) {
    e.preventDefault()
    this.setState({
      chats: this.state.messages.concat([{
        username: this.username,
        content: <p>{ReactDOM.findDOMNode(this.refs.msg).value}</p>
      }])
    })
  }

  render() {
    let { messages } = this.state;
    this.username = "Morozov Dmitriy";
    return (
      <div className="Chatroom">
        <ul className='messages' ref='messages'>
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
