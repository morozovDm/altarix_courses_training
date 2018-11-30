import React, { Component } from "react";
import "../styles/Title.css";
import logOutImg from "../resources/logout.svg";

class Title extends Component {
  logOut = e => {
    console.log(this.props);
    this.props.onLogOut();
  };

  render() {
    return (
      <div className="Title">
        <h1>Chat v0.5</h1>
        <div className="logOut" onClick={this.logOut}>
          {this.props.login}
          <div className="logOut-btn">
            Выход
            <img src={logOutImg} alt="logout" />
          </div>
        </div>
      </div>
    );
  }
}

export default Title;
