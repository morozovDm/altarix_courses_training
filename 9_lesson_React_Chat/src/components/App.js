import React, { Component } from "react";
import "../styles/App.css";
import Title from "./Title.js";
import LogInForm from "./LogInForm.js";
import Chatroom from "./Chatroom.js";
import SendMessageForm from "./SendMessageForm.js";
import { db } from "./firebase.js";
import { connect } from "react-redux";
import { logIn, logOut, getMessages } from "../redux/actions.js";

class App extends Component {
  componentDidMount() {
    const messagesRef = db.ref("messages");
    messagesRef.on("value", snapshot => {
      this.props.HandleGetMessages(Object.values(snapshot.val()));
    });
  }

  onSendMessage = message => {
    const now = Date.now();
    const msg = {
      id: now,
      name: this.props.username,
      text: message
    };
    db.ref(`/messages/${now}`).set(msg);
  };

  render() {
    if (this.props.isLogin) {
      return (
        <div className="Chat">
          <Title
            login={this.props.username}
            onLogOut={this.props.HandleLogOut}
          />
          <Chatroom
            username={this.props.username}
            messages={this.props.messages}
          />
          <SendMessageForm sendMessage={this.onSendMessage} />
        </div>
      );
    } else {
      return (
        <div className="chat-login">
          <LogInForm onLogIn={this.props.HandleLogIn} />
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    isLogin: state.isLogin,
    messages: state.messages,
    username: state.username
  };
}

function mapDispatchToProps(dispatch) {
  return {
    HandleLogIn() {
      dispatch(logIn());
    },
    HandleLogOut() {
      dispatch(logOut());
    },
    HandleGetMessages(messages) {
      dispatch(getMessages(messages));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
