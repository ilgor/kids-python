import React, { Component } from 'react'

export default class PythonIDE extends Component {
    iframe() {
        return {
          __html: '<iframe src="http://python-ide-online.s3-website-us-east-1.amazonaws.com" width="540" height="450"></iframe>'
        }
    };
    render() {
        return (        
            <div dangerouslySetInnerHTML={ this.iframe() } />
        )
  };
}