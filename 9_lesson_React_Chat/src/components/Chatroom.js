import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../styles/Chatroom.css";
import Message from "./Message.js";

class Chatroom extends Component {
  componentDidMount() {
    ReactDOM.findDOMNode(
      this.refs.messagesList
    ).scrollTop = ReactDOM.findDOMNode(this.refs.messagesList).scrollHeight;
  }

  componentDidUpdate() {
    ReactDOM.findDOMNode(
      this.refs.messagesList
    ).scrollTop = ReactDOM.findDOMNode(this.refs.messagesList).scrollHeight;
  }

  render() {
    let { messages } = this.props;
    return (
      <div className="Chatroom">
        <div className="MessagesList-container" ref="messagesList">
          <ul className="messagesList">
            {messages.map(message => (
              <Message
                key={message.id}
                message={
                  typeof message.text !== "object"
                    ? message
                    : {
                        name: message.name,
                        id: message.id,
                        text: "invalid text"
                      }
                }
                user={this.props.username}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Chatroom;
