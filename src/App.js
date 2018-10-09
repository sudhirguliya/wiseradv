import React, { Component } from 'react';
import { Container, NavBar } from './components';

//import logo from './logo.svg';
import './App.css';
import './style_v1.css';
import './wastyles_v1.css';

class App extends Component {
  render() {
    return (
      <div id="wraped">
        <NavBar/>
        <Container/>
      </div>
    );
  }
}

export default App;
