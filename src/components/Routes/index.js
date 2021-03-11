import React from 'react';
import { Route, Switch } from 'react-router';
import { useSelector } from 'react-redux';

import Home from '../Home';
import UserSignin from '../UserSignin';
import UserSignup from '../UserSignup';
import AirlineSignup from '../AirlineSignup';
import AirlineSignin from '../AirlineSignin';
import FlightList from '../FlightList';
import Userprofile from '../Userprofile';

const Routes = () => {
	const flights = useSelector((state) => state.flightReducer.flights);

	return (
		<Switch>
			<Route exact path="/user/profile">
				<Userprofile />
			</Route>
			<Route exact path="/user/signup">
				<UserSignup />
			</Route>
			<Route exact path="/user/signin">
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
