import React from 'react';
import logo from '../assets/logo.svg';
import '../App.css';
import PythonIDE from './python-ide'

export default function HomeComponent() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Bolalar uchun yangi <code>Python</code> kurslari kutib oling.
            </p>
            <a
              className="App-link"
              href="https://www.python.org/"
              target="_blank"
              rel="noopener noreferrer">
              Python Official Portali
            </a>
          </header>
          <PythonIDE></PythonIDE>
        </div>
    );
}