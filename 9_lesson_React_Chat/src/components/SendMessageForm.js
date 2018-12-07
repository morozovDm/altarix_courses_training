import React, { Component } from "react";
import "../styles/SendMessageForm.css";
import MessageButton from "../resources/message.svg";
import { connect } from "react-redux";
import { putMessage } from "../redux/actions.js";

class SendMessageForm extends Component {
  onSendMessage = e => {
    e.preventDefault();
    if (this.props.currentMessage !== "")
      this.props.sendMessage(this.props.currentMessage);
    this.props.HandlePutMessage("");
  };

  onChange = e => {
    this.props.HandlePutMessage(e.target.value);
  };

  render() {
    return (
      <form className="SendMessageForm" onSubmit={this.onSendMessage}>
        <input
          type="text"
          ref="msg"
          placeholder="Input message..."
          value={this.props.currentMessage}
          onChange={this.onChange}
        />
        <button type="submit" value="Submit">
          <img src={MessageButton} alt="msg-btn" />
        </button>
      </form>
    );
  }
}

const mapStateToProps = ({ currentMessage }) => ({
  currentMessage
});

const mapDispatchToProps = dispatch => ({
  HandlePutMessage(currentMessage) {
    dispatch(putMessage(currentMessage));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SendMessageForm);
