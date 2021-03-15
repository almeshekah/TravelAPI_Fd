import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { useState } from "react";

//Components
import Loading from "../Loading";
import FlightItem from "./FlightItem";
//Styling
import { StyledList } from "./styles";
import { Button } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { chosenFlights } from "../../store/actions/bookingActions";

const Flights = ({
  flights,
  returnFlights,
  loading,
  bookedFlights,
  travelClassId,
}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [selectedFlight, setSelectedFlight] = useState(null);

  if (loading) return <Loading />;

  const handleSelect = (flightId) => setSelectedFlight(flightId);
  const handleSubmit = () => {
    dispatch(
      chosenFlights(selectedFlight, history, returnFlights.length, "departing")
    );
    handleSelect(null);
  };
  console.log(selectedFlight);
  const flightList = flights.map((flight) => (
    <FlightItem
      flight={flight}
      selectedFlight={selectedFlight}
      handleSelect={handleSelect}
      travelClassId={travelClassId}
    />
  ));
  return (
    <StyledList>
      {flightList}
      {selectedFlight && (
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSubmit}
        >
          {returnFlights.length ? "Next" : "Book"}
        </Button>
      )}
    </StyledList>
  );
};

export default Flights;
