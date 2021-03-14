import { useSelector } from 'react-redux';
//Components
import Loading from '../Loading';
import FlightItem from './FlightItem';
//Styling
import { StyledList } from './styles';

const Flights = () => {
	const { flights, flightsLoading } = useSelector(
		(state) => state.flightReducer
	);

	if (flightsLoading) return <Loading />;

	const flightList = flights.map((flight) => <FlightItem flight={flight} />);
	return (
		<>
			<StyledList>{flightList}</StyledList>
		</>
	);
};

export default Flights;
