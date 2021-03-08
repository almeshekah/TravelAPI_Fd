import { AuthButtonStyled } from './styles';
import { Link } from 'react-router-dom';

const SigninButton = () => {
	return (
		<Link to="/usersignin">
			<AuthButtonStyled>Sign in</AuthButtonStyled>
		</Link>
	);
};

export default SigninButton;
