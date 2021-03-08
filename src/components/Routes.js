import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import UserSignin from './UserSignin';
import UserSignup from './UserSignup';

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/usersignup">
				<UserSignup />
			</Route>
			<Route exact path="/usersignin">
				<UserSignin />
			</Route>
			<Route exact path="/">
				<Home />
			</Route>
		</Switch>
	);
};

export default Routes;
