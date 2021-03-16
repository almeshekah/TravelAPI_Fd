import React from 'react';

const PassengerItem = ({ passenger }) => {
	return (
		<tr>
			<td>{passenger.firstName}</td>
			<td>{passenger.lastName}</td>
			<td>{passenger.passport}</td>
			<td>{passenger.email}</td>
			<td>{passenger.birthDate}</td>
		</tr>
	);
};

export default PassengerItem;
