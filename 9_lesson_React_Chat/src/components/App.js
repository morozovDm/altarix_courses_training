import React, { Component } from 'react';
import '../styles/App.css';
import Chatroom from './Chatroom.js'
import Title from './Title.js'
import SendMessageForm from './SendMessageForm.js'
import LogInForm from './LogInForm.js'

class App extends Component {
  username = "";
  state = {
    isLogin: false,
    messages: [
      {
        id: Date.now() - 4,
        username: "Петр Петров",
        content: <p>Привет!</p>,
        time: new Date().toLocaleString(),
      },
      {
        id: Date.now() - 3,
        username: "Петр Петров",
        content: <p>Как дела с JavaScript?</p>,
        time: new Date().toLocaleString()
      },
      {
        id: Date.now() - 2,
        username: "Морозов Дмитрий",
        content: <p>(((</p>,
        time: new Date().toLocaleString()
      },
      {
        id: Date.now() - 1,
        username: "Петр Петров",
        content: <p>Че?</p>,
        time: new Date().toLocaleString()
      }]
  };

  onLogIn = (logIn) => {
    this.username = logIn
    this.setState({
      isLogin: true
    })
  }

  submitMessage = (e) => {
    this.setState({
      messages: this.state.messages.concat(
        {
          username: this.username,
          content: <p>{e}</p>,
          id: Date.now(),
          time: new Date().toLocaleString(),
        }
      )
    })
  }

  render() {
    if(this.state.isLogin) {
      return (
        <div className="Chat">
          <Title />
          <Chatroom username={this.username} messages={this.state.messages} />
          <SendMessageForm onSubmit={this.submitMessage} />
        </div>
      );
    }
    else {
      return(
        <div className='chat-login'>
          <LogInForm onLogIn={this.onLogIn}/>
        </div>
      )
    }
  }
}

export default App;
