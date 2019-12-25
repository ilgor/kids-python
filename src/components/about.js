import React, { Component } from 'react'

export default class AboutComponent extends Component {
  render() {
    return (
      <div className="container">
        <h1>About Page</h1>
        <p>
        <ul>
            <h2>This is ineractive Python tutorial for anyone! </h2>
            <li>Brought to you by <strong>Pramo Navo</strong></li>
            <li>Copyright@2019</li>
          </ul>
        </p>
      </div>
    )
  };
}