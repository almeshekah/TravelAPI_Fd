import * as React from 'react';

//components
import { useSelector } from 'react-redux';

import Loading from '../Loading';
import FlightItem from './FlightItem';
import PassengerItem from './PassengerItem';

const FlightsHistory = () => {
	const orders = useSelector((state) => state.authReducer.history);
	const loading = useSelector((state) => state.authReducer.loadingHistory);
	if (loading) return <Loading />;
	const flights = [];
	const passengers = [];
	const foundFlights = orders.map((order) => order.Flights);
	const foundPassengers = orders.map((order) => order.passenger);
	const passenger = foundPassengers.forEach((passenger) =>
		passenger.forEach((pr) => passengers.push(pr))
	);
	const flight = foundFlights.forEach((flight) =>
		flight.forEach((fo) => flights.push(fo))
	);

	console.log(flights);
	const flightList = flights.map((flight) => (
		<FlightItem flight={flight} key={flight.id} />
	));

	const passengerList = passengers.map((passenger) => (
		<PassengerItem passenger={passenger} key={passenger.id} />
	));
	return (
		<>
			<div className="App">
				<h1 className="mt-5"> Flights History</h1>
				<div className="container mt-5">
					<div className="row justify-content-md-center">
						<div className="col-20">
							<table className="table table-bordered">
								<thead>
									<tr>
										<th scope="col">Flight Name</th>
										<th scope="col">Departure Date</th>
										<th scope="col">Departure Time</th>
										<th scope="col">Arrival Time</th>
									</tr>
								</thead>
								<tbody>{flightList}</tbody>
							</table>
						</div>

						<div className="col-4"></div>
					</div>
				</div>
			</div>
			<div className="App">
				<h1 className="mt-5"> Passengers History</h1>
				<div className="container mt-5">
					<div className="row justify-content-md-center">
						<div className="col-20">
							<table className="table table-bordered">
								<thead>
									<tr>
										<th scope="col">First Name</th>
										<th scope="col">Last Name</th>
										<th scope="col">Passport </th>
										<th scope="col">Email</th>
										<th scope="col">Birth Date</th>
									</tr>
								</thead>
								<tbody>{passengerList}</tbody>
							</table>
						</div>

						<div className="col-4"></div>
					</div>
				</div>
			</div>
		</>
	);
};

export default FlightsHistory;
