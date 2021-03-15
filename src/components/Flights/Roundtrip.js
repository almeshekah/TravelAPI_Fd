import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { useState } from "react";
//Components
import Loading from "../Loading";
import FlightItem from "./FlightItem";
//Styling
import { StyledList, StyledMessage } from "./styles";
import { Button } from "@material-ui/core";
import { chosenFlights } from "../../store/actions/bookingActions";

const Roundtrip = ({
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

  const departingFlight = flights.find(
    (flight) => flight.id === bookedFlights.departing
  );
  const handleSubmit = () => {
    dispatch(
      chosenFlights(selectedFlight, history, returnFlights.length, "returning")
    );
    handleSelect(null);
  };
  const flightList = returnFlights
    .filter(
      (flight) =>
        flight.departureDate !== departingFlight.departureDate ||
        +flight.departureTime >= 2 + +departingFlight.arrivalTime
    )
    .map((flight) => (
      <FlightItem
        flight={flight}
        selectedFlight={selectedFlight}
        handleSelect={handleSelect}
        travelClassId={travelClassId}
      />
    ));

  return (
    <StyledList>
      {flightList.length === 0 ? (
        <StyledMessage>
          No return flights available 😔 Please adjust your search criteria or
          choose another departing flight.
        </StyledMessage>
      ) : (
        flightList
      )}
      {selectedFlight && (
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSubmit}
        >
          Book
        </Button>
      )}
    </StyledList>
  );
};

export default Roundtrip;
