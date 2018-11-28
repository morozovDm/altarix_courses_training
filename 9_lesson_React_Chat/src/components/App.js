import Chatroom from './Chatroom.js'
import React, { Component } from 'react';
import '../styles/App.css';
import Title from './Title.js'
import SendMessageForm from './SendMessageForm.js'
import LogInForm from './LogInForm.js'
import {db} from './firebase.js'

class App extends Component {
  username = "";
  state = {
    isLogin: false,
    messages: []
  };

  onLogIn = (login) => {
    this.username = login
    this.setState({
      isLogin: true
    })
  }

  componentDidMount(){
    const messagesRef = db.ref('messages');
		messagesRef.on('value', (snapshot) => {
			this.setState({ 
       				 messages: Object.values(snapshot.val()) 
			});
		});
  }

  onLogOut = () => {
    this.username = ''
    this.setState({
      isLogin: false
    })
  }

  onSubmitMessage = (message) => {
    const now = Date.now()
    const msg = {
          id: now,
          name: this.username,
          text: message
    }
    db.ref(`/messages/${now}`).set(msg);
	  
    this.setState({
      messages: this.state.messages.concat(msg)
    })
  }

  render() {
    if (this.state.isLogin) {
      return (
        <div className="Chat">
          <Title
            login={this.username}
            onLogOut={this.onLogOut} />
          <Chatroom
            username={this.username}
            messages={this.state.messages} />
          <SendMessageForm
            onSubmit={this.onSubmitMessage} />
        </div>
      );
    }
    else {
      return (
        <div className='chat-login'>
          <LogInForm
            onLogIn={this.onLogIn} />
        </div>
      )
    }
  }
}

export default App;
