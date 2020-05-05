import React from 'react';
import logo from '../logo.svg';
import './Demo.css';

class Demo extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/demo/demo.js</code> and save to reload.          
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fast Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default Demo;