import { useSelector } from "react-redux";
import { Search, People, FlightLand, FlightTakeoff } from "@material-ui/icons/";
import {
  Button,
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
} from "@material-ui/core";
import Loading from "../Loading";
import FlightItem from "./FlightItem";

const Flights = () => {
  const { flights, flightsLoading } = useSelector(
    (state) => state.flightReducer
  );

  if (flightsLoading) return <Loading />;

  const flightList = flights.map((flight) => <FlightItem flight={flight} />);
  return <div> {flightList}</div>;
};

export default Flights;
