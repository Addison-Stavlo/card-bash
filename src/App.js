import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LogIn from './components/login/login';

class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" onClick={this.props.logIn} /> */}
          <div className="App-logo" onClick={this.props.logIn}>Click to Enter.</div>
        </header>
      </div>
    );
  }
}

export default LogIn(App);
