import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import logo from './assets/images/logo.svg';
import './assets/css/App.css';

import Navegate from './components/navegate/Navegate.js';
import User from './User.js';
import Resource from './Resource';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" /> 
        </header>
        <BrowserRouter>
          <React.Fragment>
            <Navegate/>
            <Route path = "/App" component = {App}/>
            <Route path = "/User" component = {User}/>
            <Route path = "/Resource" component = {Resource}/>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
