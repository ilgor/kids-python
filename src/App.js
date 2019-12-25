import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bolalar uchun sodda <code>Python</code> kurslari kutib oling!
        </p>
        <a
          className="App-link"
          href="https://www.python.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Python Inglizcha Portali
        </a>
      </header>
    </div>
  );
}

export default App;
