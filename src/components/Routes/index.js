import React from "react";
import { Route, Switch } from "react-router";
import Home from "../Home";
import AirlineSignup from "../AirlineSignup";
import AirlineSignin from "../AirlineSignin";

const Routes = () => {
  return (
    <Switch>
      <Route path="/AirlineSignup">
        <AirlineSignup />
      </Route>
      <Route path="/AirlineSignin">
        <AirlineSignin />
      </Route>
      <Route path="/Home">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
