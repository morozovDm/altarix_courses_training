import React, { Component } from "react";
import "../styles/LogInForm.css";
import { connect } from "react-redux";
import { setUsername } from "../redux/actions.js";
class LogInForm extends Component {
  onSubmitLogin = e => {
    e.preventDefault();
    if (this.props.username !== "") {
      this.props.onLogIn(this.props.username);
    }
  };

  onChange = e => {
    this.props.HandleSetUsername(e.target.value);
  };

  render() {
    return (
      <div className="LogInForm">
        <h1>Log In</h1>
        <form onSubmit={this.onSubmitLogin}>
          <input
            className="username-input"
            type="text"
            placeholder="Input username..."
            value={this.props.username}
            onChange={this.onChange}
          />
          <button className="logIn-btn" type="submit" value="Submit">
            Log In
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ username }) => ({
  username
});

const mapDispatchToProps = dispatch => ({
  HandleSetUsername(username) {
    dispatch(setUsername(username));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogInForm);
