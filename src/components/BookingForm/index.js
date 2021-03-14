import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { bookingCreate } from '../../store/actions/bookingActions';
import {
	FormStyled,
	LabelStyled,
	InputFieldStyled,
	FieldSetStyled,
	LegendStyled,
	FormAddButtonStyled,
} from '../../styles';

import { register } from '../../serviceWorker';

const BookingForm = () => {
	const _user = useSelector((state) => state.authReducer.user);
	let cont = 3;

	const history = useHistory();
	const dispatch = useDispatch();

	const [user, setUser] = useState({
		firstName: '',
		lastName: '',
		email: '',
		passport: '',
		birthday: '',
		userId: null,
	});

	if (_user && !user.userId) setUser({ ...user, ['userId']: _user.id });

	const handleChange = (event) => {
		setUser({ ...user, [event.target.name]: event.target.value });
	};
	const [passengers, setPassengers] = useState([]);
	const [numpassengers, setnumpassengers] = useState(0);
	const restForm = () => {
		setUser({
			firstName: '',
			lastName: '',
			email: '',
			passport: '',
			birthday: '',
		});
	};
	const handlePassenger = (event) => {
		passengers.push(user);
		event.preventDefault();
		restForm();
		setnumpassengers(numpassengers + 1);
	};

	const handleSubmit = (event) => {
		dispatch(bookingCreate(passengers));
		event.preventDefault();
		restForm();
		console.log(passengers);
		history.replace('/');
	};
	return (
		<>
			<Helmet>
				<title> Passenger info</title>
			</Helmet>
			<FormStyled>
				<form onSubmit={handleSubmit}>
					<FieldSetStyled>
						<LegendStyled>
							<h2> Passenger info </h2>

							{passengers.length >= cont ? (
								<>
									<h3> Thank you ✅ </h3>

									<FormAddButtonStyled onSubmit={handleSubmit}>
										Submit
									</FormAddButtonStyled>
								</>
							) : (
								<>
									<LabelStyled>
										firstName:
										<InputFieldStyled
											type="text"
											name="firstName"
											value={user.firstName}
											onChange={handleChange}
										/>
									</LabelStyled>

									<LabelStyled>
										lastName:
										<InputFieldStyled
											type="text"
											name="lastName"
											value={user.lastName}
											onChange={handleChange}
										/>
									</LabelStyled>
									<LabelStyled>
										passport:
										<InputFieldStyled
											type="text"
											name="passport"
											value={user.passport}
											onChange={handleChange}
										/>
									</LabelStyled>
									<LabelStyled>
										email:
										<InputFieldStyled
											type="text"
											name="email"
											value={user.email}
											onChange={handleChange}
										/>
									</LabelStyled>
									<LabelStyled>
										birthday
										<InputFieldStyled
											type="date"
											className="form-control"
											placeholder="date"
											aria-label="date"
											aria-describedby="basic-addon1"
											name="birthday"
											onChange={handleChange}
											value={user.birthday}
										/>
									</LabelStyled>
									<FormAddButtonStyled onClick={handlePassenger}>
										Next Passenger
									</FormAddButtonStyled>
								</>
							)}
						</LegendStyled>
					</FieldSetStyled>
				</form>
			</FormStyled>
		</>
	);
};

export default BookingForm;
