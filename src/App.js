import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Navbar from "./components/navbar/Navbar";
import HomeComponent from './components/home'
import AboutComponent from './components/about'
import ContactComponent from './components/contact'

import GlobalStyle from './styles/Global';

export default class App extends Component {

  state = {
    navbarOpen: false
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  render() {
  
    return(
      <>
        <Navbar 
          navbarState={this.state.navbarOpen} 
          handleNavbar={this.handleNavbar}
        />
        <br/><br/><br/><br/>
        <Switch>
          <Route path="/" exact component={HomeComponent} />
          <Route path="/about" component={AboutComponent} />
          <Route path="/contact" component={ContactComponent} />
        </Switch>
        <GlobalStyle />
      </>
    )
  }
}