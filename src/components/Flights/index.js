import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { useState } from "react";
//Components
import Loading from "../Loading";
import FlightItem from "./FlightItem";
import FlightSearch from "../FlightSearch";
import { chosenFlights } from "../../store/actions/bookingActions";
import { timeFilter, airlineFilter, priceFilter, timeButtons } from "./Filters";
//Styling
import { StyledList, StyledMessage } from "./styles";
import {
  Button,
  Typography,
  Slider,
  Checkbox,
  FormControlLabel,
  Grid,
} from "@material-ui/core";

const Flights = ({
  flights,
  returnFlights,
  loading,
  travelClassId,
  airlines,
  roundtrip,
}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [selectedFlight, setSelectedFlight] = useState(null);
  const initialState = {
    price: [0, Infinity],
    airlines: [],
    departureTime: [],
    arrivalTime: [],
  };
  const [filter, setFilter] = useState(initialState);

  if (loading) return <Loading />;

  const handleSelect = (flightId) => setSelectedFlight(flightId);
  const handleSubmit = () => {
    dispatch(chosenFlights(selectedFlight, history, roundtrip, "departing"));
    handleSelect(null);
  };

  const handleFilter = (name, set) => {
    filter[set].includes(name)
      ? setFilter({
          ...filter,
          [set]: filter[set].filter((something) => something !== name),
        })
      : setFilter({
          ...filter,
          [set]: [...filter[set], name],
        });
  };

  const maxPrice = Math.max(
    ...flights.map(
      (flight) => flight[`${travelClassId === 1 ? "economy" : "business"}Price`]
    )
  );
  //Filters
  flights = priceFilter(
    flights,
    filter.price[0],
    filter.price[1],
    travelClassId
  );
  if (filter.departureTime.length)
    flights = timeFilter(flights, filter.departureTime, "departureTime");
  if (filter.arrivalTime.length)
    flights = timeFilter(flights, filter.arrivalTime, "arrivalTime");
  if (filter.airlines.length) flights = airlineFilter(flights, filter.airlines);

  const flightList = flights.map((flight) => (
    <FlightItem
      flight={flight}
      selectedFlight={selectedFlight}
      handleSelect={handleSelect}
      travelClassId={travelClassId}
    />
  ));

  const airlineCheckbox = airlines.map((airline) => (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            checked={filter.airlines.includes(airline.name)}
            onChange={() => handleFilter(airline.name, "airlines")}
            name={airline.name}
          />
        }
        label={airline.name}
      />
    </div>
  ));

  if (flightList.length === 0 && selectedFlight) handleSelect(null);

  return (
    <>
      <div style={{ display: "flex" }}>
        Departure Time: {timeButtons(filter, handleFilter, "departureTime")}
        Arrival Time: {timeButtons(filter, handleFilter, "arrivalTime")}
        <div style={{ width: 300, marginLeft: "100px", marginRight: "100px" }}>
          <Typography id="range-slider" gutterBottom>
            Price range (BD)
          </Typography>
          <Slider
            value={filter.price}
            onChange={(event, priceRange) =>
              setFilter({ ...filter, price: priceRange })
            }
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            max={maxPrice + 10}
          />
        </div>
        {airlineCheckbox}
        <Button onClick={() => setFilter(initialState)}>Reset Filters</Button>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <FlightSearch
            selectedFlight={selectedFlight}
            handleSelect={handleSelect}
            setQuery={setFilter}
            initialState={initialState}
          />
        </Grid>
        <Grid item xs={9}>
          <StyledList>
            {flightList.length === 0 ? (
              <StyledMessage>
                No departingFlight flights available 😔 Please adjust your
                search criteria.
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
                type="submit"
              >
                {roundtrip ? "Next" : "Book"}
              </Button>
            )}
          </StyledList>
        </Grid>
      </Grid>
    </>
  );
};

export default Flights;
