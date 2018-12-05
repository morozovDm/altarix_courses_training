import React, { PureComponent } from "react";
import "../styles/Message.css";
import ClassNames from "classnames";
import icon from "../resources/anonymus.svg";

class Message extends PureComponent {
  render() {
    var msg = ClassNames({
      message: true,
      right: this.props.user === this.props.message.name,
      left: !this.props.user === this.props.message.name
    });
    return (
      <li className={msg}>
        <div className="msg-sender">
          <img
            src={this.props.message.img ? this.props.message.img : icon}
            alt="anonymous"
          />
          <div>{this.props.message.name}</div>
        </div>
        <div>
          <div className="msg-content">{this.props.message.text}</div>
          {new Date(this.props.message.id).toLocaleString()}
        </div>
      </li>
    );
  }
}

export default Message;
