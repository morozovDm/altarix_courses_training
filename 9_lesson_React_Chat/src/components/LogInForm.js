import React, { Component } from 'react';
import '../styles/LogInForm.css'

class LogInForm extends Component {

  state = {
    text: ''
  }

  onSubmitLogin = (e) => {
    e.preventDefault()
    if (this.state.text !== '')
      this.props.onLogIn(this.state.text)
    this.setState({
      text: ''
    })
  }

  onChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    return (
      <div className='LogInForm'>
        <h1>Log In</h1>
        <form onSubmit={this.onSubmitLogin}>
          <input className='username-input' type='text' placeholder='Input username...' value={this.state.text} onChange={this.onChange}></input>
          <button className='logIn-btn' type="submit" value="Submit">Log In</button>
        </form>
      </div>
    )
  }
}

export default LogInForm;