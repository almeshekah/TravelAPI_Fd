import { AuthButtonStyled } from './styles';
import { Link } from 'react-router-dom';

const SignupButton = () => {
	return (
		<Link to="/usersignup">
			<AuthButtonStyled>Sign up</AuthButtonStyled>
		</Link>
	);
};

export default SignupButton;
