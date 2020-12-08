import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Route, Switch, BrowserRouter } from "react-router-dom";
import LandingPage from "./containers/landing-page";
import NotFound from "./components/utility/not-found";

class App extends Component {
  componentDidMount() {
    
  }
  
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={`/`} component={LandingPage} />
          <Route path={`*`} component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default (App);
