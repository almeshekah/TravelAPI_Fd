import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { register } from '../../serviceWorker';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { signup, updateProfile } from '../../store/actions/authActions';
//Styling
import {
	FormStyled,
	LabelStyled,
	InputFieldStyled,
	FieldSetStyled,
	LegendStyled,
	FormAddButtonStyled,
} from '../../styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const UserSignup = () => {
	const eye = <FontAwesomeIcon icon={faEye} />;
	const profile = useSelector((state) => state.authReducer.profile);
	const { errors } = useForm();
	const history = useHistory();

	const [passwordShown, setPasswordShown] = useState(false);
	const togglePasswordVisiblity = () => {
		setPasswordShown(passwordShown ? false : true);
	};

	const dispatch = useDispatch();

	const [user, setUser] = useState(
		profile ?? {
			username: '',
			password: '',
			email: '',
			firstName: '',
			lastName: '',
			passport: '',
			picture: '',
		}
	);

	const handleChange = (event) => {
		setUser({ ...user, [event.target.name]: event.target.value });
	};

	const handlePicture = (event) => {
		setUser({ ...user, picture: event.target.files[0] });
	};

	const restForm = () => {
		setUser({
			username: '',
			password: '',
			email: '',
			firstName: '',
			lastName: '',
			passport: '',
			picture: '',
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (profile) {
			dispatch(updateProfile(user));
			history.replace('/');
		} else dispatch(signup(user, history));
		restForm();
	};
	return (
		<>
			<Helmet>
				<title></title>
			</Helmet>
			<FormStyled>
				<form onSubmit={handleSubmit}>
					<FieldSetStyled>
						<LegendStyled>
							<h2>{profile ? 'Update' : 'Sign Up'}</h2>

							<LabelStyled>
								First Name :
								<InputFieldStyled
									type="text"
									name="firstName"
									value={user.firstName}
									onChange={handleChange}
								/>
							</LabelStyled>

							<LabelStyled>
								Last Name :
								<InputFieldStyled
									type="text"
									name="lastName"
									value={user.lastName}
									onChange={handleChange}
								/>
							</LabelStyled>
							<LabelStyled>
								Passport:
								<InputFieldStyled
									type="text"
									name="passport"
									value={user.passport}
									onChange={handleChange}
								/>
							</LabelStyled>

							<LabelStyled>
								Username:
								<InputFieldStyled
									type="text"
									name="username"
									value={user.username}
									onChange={handleChange}
								/>
							</LabelStyled>
							{profile ? null : (
								<LabelStyled>
									Password:
									<span>
										<i onClick={togglePasswordVisiblity}>{eye}</i>
									</span>
									<InputFieldStyled
										type={passwordShown ? 'text' : 'password'}
										name="password"
										value={user.password}
										onChange={handleChange}
										ref={register({ required: true, minLength: 8 })}
									/>
									{errors.password && <p>Pass is required!!</p>}
								</LabelStyled>
							)}

							<LabelStyled>
								Picture:
								<InputFieldStyled
									type="file"
									name="picture"
									onChange={handlePicture}
								/>
							</LabelStyled>
							<LabelStyled>
								Email:
								<InputFieldStyled
									type="email"
									name="email"
									onChange={handleChange}
								/>
							</LabelStyled>

							<FormAddButtonStyled onSubmit={handleSubmit}>
								{profile ? 'Update' : 'Sign Up'}
							</FormAddButtonStyled>
						</LegendStyled>
					</FieldSetStyled>
				</form>
			</FormStyled>
		</>
	);
};

export default UserSignup;
