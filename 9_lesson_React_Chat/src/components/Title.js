import React from 'react';
import '../styles/Title.css'
import logOutImg from '../resources/logout.svg'
class Title extends React.Component {

  logOut = (e) => {
    this.props.onLogOut()
  }

  render() {
    return (
      <div className='Title'>
        <h1>Chat v0.4.5</h1>
        <div className='logOut' onClick={this.logOut}>
          {this.props.login} 
          <div className='logOut-btn'>Выход<img src={logOutImg} alt='logout'></img></div>

        </div>
      </div>
    )
  }
}

export default Title;
