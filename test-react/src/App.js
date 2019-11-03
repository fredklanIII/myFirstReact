import React from 'react';
import logo from './logo.svg';
import wolf from './wolf.png';
import './App.css';

//add your own component
class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>
    
  }
}

class SeatBelt extends React.Component {
  render() {
    return (
      <h2>Hi, I am a seatbelt in that car</h2>
      
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo1" alt="logo" />
        <img src={logo} className="App-logo2" alt="logo" />
        <img src={wolf} className="Wolf-logo1" alt="wolf" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Car />
        
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

export default App;
