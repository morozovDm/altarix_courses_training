import React, { Component } from 'react';
import '../styles/App.css';
import Chatroom from './Chatroom.js'
import Title from './Title.js'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Title />
        <Chatroom />
      </div>
    );
  }
}

export default App;
