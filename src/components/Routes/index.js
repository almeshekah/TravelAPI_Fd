import React from "react";
import { Route, Switch } from "react-router";
import { useSelector } from "react-redux";

import Home from "../Home";
import UserSignin from "../UserSignin";
import UserSignup from "../UserSignup";
import AirlineSignup from "../AirlineSignup";
import AirlineSignin from "../AirlineSignin";
import FlightList from "../FlightList";

const Routes = () => {
  const flights = useSelector((state) => state.flightReducer.flights);

  return (
    <Switch>
      <Route exact path="/usersignup">
        <UserSignup />
      </Route>
      <Route exact path="/usersignin">
        <UserSignin />
      </Route>
      <Route path="/airlinesignup">
        <AirlineSignup />
      </Route>
      <Route path="/airlinesignin">
        <AirlineSignin />
      </Route>
      <Route path="/flights">
        <FlightList flights={flights} />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
