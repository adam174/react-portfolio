import React, { Component } from 'react';
import './App.css';

import {
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Interests from './components/Interests';
import Skills from './components/Skills';
import Awards from './components/Awards';
import Nav from './components/Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
       
        <div>
        <Nav />
        </div>
        <div className="App-intro">
          <Switch>
            <Route exact path="/"  component={About} />
            <Route path="/experience" component={Experience} />
            <Route path="/education" component={Education} />
            <Route path="/interests" component={Interests} />
            <Route path="/skills" component={Skills} />
            <Route path="/awards" component={Awards} />
            <Route path="/about" component={About} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
