import React from 'react';

const FlightItem = ({ flight }) => {
	return (
		<tr>
			<td>{flight.name}</td>
			<td>{flight.departureDate}</td>
			<td>{flight.departureTime}</td>
			<td>{flight.arrivalTime}</td>
		</tr>
	);
};

export default FlightItem;
