import React, { Component } from "react";
import {
  Route, Switch, Redirect, BrowserRouter as Router,
} from 'react-router-dom';
import MainPage from './pages/MainPage';
import COCPage from './pages/COCPage';
import ReceivedPage from './pages/MainPage';

import "./App.css";

class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/main" component={MainPage} />
          <Route exact path="/coc" component={COCPage} />
          <Route exact path="/received" component={ReceivedPage} />
          <Redirect exact to="/main" />
        </Switch>
      </Router>
    );
  }
}

export default App;
