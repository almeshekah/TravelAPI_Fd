import React from "react";
import { Route, Switch } from "react-router";
import { useSelector } from "react-redux";
//Components
import Home from "../Home";
import UserSignin from "../UserSignin";
import UserSignup from "../UserSignup";
import AirlineSignup from "../AirlineSignup";
import AirlineSignin from "../AirlineSignin";
import FlightList from "../FlightList";
import Flights from "../Flights";
import Userprofile from '../Userprofile';

const Routes = () => {
  const flights = useSelector((state) => state.flightReducer.flights);
  const airlines = useSelector((state) => state.airlineReducer.airlines);

  return (
    <Switch>
    	<Route exact path="/user/profile">
				<Userprofile />
			</Route>
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
      <Route path="/flightsearch">
        <Flights />
      </Route>
      <Route
        path={[
          "/airlines/:airlineId/flights/new",
          "/airlines/:airlineId/flights/update",
        ]}
      >
        <FlightAdd />
      </Route>
      <Route path="/airlines/:airlineSlug">
        <AirlineDetail flights={flights} />
      </Route>
      <Route path="/flights">
        <FlightList flights={flights} />
      </Route>
      <Route path="/airlines">
        <AirlineList airlines={airlines} />
      </Route>
			<Route path="/">
				<Home />
			</Route>
		</Switch>
	);

};

export default Routes;
