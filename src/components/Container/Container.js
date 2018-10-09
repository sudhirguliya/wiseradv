import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, Contacts, NotFound } from '../';

class Container extends Component {
  render() { 
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about_us.asp' component={About}/>
          <Route path='/contact_us.asp' component={Contacts}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    );
  }
}

export default Container;