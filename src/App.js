import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Route, Switch, BrowserRouter } from "react-router-dom";
import LandingPage from "./containers/landing-page";
import Users from "./containers/users";
import NotFound from "./components/utility/not-found";

class App extends Component {
  componentDidMount() {
    
  }
  
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={`/`} component={LandingPage} />
          <Route exact path={'/users'} component={Users}/>
          <Route path={`*`} component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default (App);
