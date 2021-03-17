import { addDays, format } from "date-fns";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//styling
import { Search, People, FlightLand, FlightTakeoff } from "@material-ui/icons/";
import { Button, Input, Grid } from "@material-ui/core";
import { StyledFormControl } from "./styles";
//Components
import Loading from "../Loading";
import { searchFlight } from "../../store/actions/flightActions";
import DatePicker from "./DatePicker";
import AirportSelect from "./AirportSelect";
import { useHistory } from "react-router";
import { passengersDetails } from "../../store/actions/bookingActions";

const FlightSearch = () => {
  const { destinations, destinationLoading } = useSelector(
    (state) => state.destinationReducer
  );
  const { travelClasses, travelClassLoading } = useSelector(
    (state) => state.travelClassReducer
  );
  const dispatch = useDispatch();
  const history = useHistory();
  const [options, setOptions] = useState({
    arrivalAirport: 18,
    departureAirport: 20,
  });
  const [filter, setFilter] = useState({
    passengers: 2,
    roundtrip: false,
    departureDate: new Date(),
    returnDate: addDays(new Date(), 7),
  });
  if (destinationLoading || travelClassLoading) return <Loading />;

  const travelClassOptions = travelClasses.map((travelClass) => ({
    value: travelClass.id,
    label: `${travelClass.type}`,
    name: "travelClassId",
  }));

  const departureOptions = destinations.map((destination) => ({
    value: destination.id,
    label: `${destination.city} (${destination.code} - ${destination.airport})`,
    name: "departureAirport",
  }));
  const arrivalOptions = departureOptions.map((option) => ({
    ...option,
    name: "arrivalAirport",
  }));

  const handleOptions = (selectedOption) => {
    setOptions({ ...options, [selectedOption.name]: selectedOption });
  };
  const handleChange = (event) => {
    setFilter({ ...filter, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    dispatch(passengersDetails(filter.passengers, options.travelClassId.value));
    dispatch(
      searchFlight(
        {
          ...filter,
          departureDate: format(filter.departureDate, "yyyy-MM-dd"),
          returnDate: filter.returnDate
            ? format(filter.returnDate, "yyyy-MM-dd")
            : null,
          departureAirport: options.departureAirport.value,
          arrivalAirport: options.arrivalAirport.value,
          travelClassId: options.travelClassId.value,
        },
        history
      )
    );
  };
  return (
    <Grid container justify="center">
      <StyledFormControl>
        <h3>Departure Date</h3>
        <DatePicker filter={filter} setFilter={setFilter} set="departureDate" />
        {filter.roundtrip && (
          <>
            <h3>Return Date</h3>
            <DatePicker
              filter={filter}
              setFilter={setFilter}
              set="returnDate"
            />
          </>
        )}
        <h3>
          Number of Passengers <People />
        </h3>
        <Input
          id="my-input"
          min={1}
          type="number"
          name="passengers"
          value={filter.passengers}
          onChange={handleChange}
        />
        <h3>
          Departure Airport <FlightTakeoff />
        </h3>
        <AirportSelect
          options={options}
          handleOptions={handleOptions}
          _options={departureOptions}
          set="departureAirport"
        />
        <h3>
          Arrival Airport <FlightLand />
        </h3>
        <AirportSelect
          options={options}
          handleOptions={handleOptions}
          _options={arrivalOptions}
          set="arrivalAirport"
        />
        <h3>Travel Class</h3>
        <AirportSelect
          options={options}
          handleOptions={handleOptions}
          _options={travelClassOptions}
          set="travelClassId"
        />
        <Button
          color="primary"
          onClick={() => setFilter({ ...filter, roundtrip: !filter.roundtrip })}
        >
          {filter.roundtrip ? "Roundtrip" : "One-way"}
        </Button>

        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSubmit}
        >
          <Search />
          Search Flights
        </Button>
      </StyledFormControl>
    </Grid>
  );
};

export default FlightSearch;
