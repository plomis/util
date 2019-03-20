import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import util from '@plomis/util';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      height: 0
    };
  }

  componentDidMount() {
    this.eventListener = util.addEventListener(window, 'resize', this.handleResize );
  }

  handleResize = e => {
    
  };

  componentWillMount() {
    if (this.eventListener ) {
      this.eventListener.remove();
      this.eventListener = null;
    }
  }

  render() {
    console.log('util', util)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
