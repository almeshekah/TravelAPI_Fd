import { addDays, addHours } from "date-fns";
import { useState } from "react";
import { Search, People, FlightLand, FlightTakeoff } from "@material-ui/icons/";
import {
  Button,
  FormControl,
  Input,
  InputLabel,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import { StyledFormControl } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Loading";
import { searchFlight } from "../../store/actions/flightActions";
import DatePicker from "./DatePicker";
import AirportSelect from "./AirportSelect";

const FlightSearch = () => {
  const { destinations, destinationLoading } = useSelector(
    (state) => state.destinationReducer
  );
  const dispatch = useDispatch();
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: "selection",
    },
  ]);
  const [returnDate, setReturnDate] = useState([
    {
      startDate: addDays(new Date(), 7),
      endDate: addDays(new Date(), 8),
      key: "selection",
    },
  ]);

  const [roundtrip, setRoundtrip] = useState(false);
  const [options, setOptions] = useState({
    arrivalAirport: null,
    departureAirport: null,
  });
  const [filter, setFilter] = useState({
    passangers: 2,
  });
  if (destinationLoading) return <Loading />;

  const departureOptions = destinations.map((destination) => ({
    value: destination.airport,
    label: `${destination.location} (${destination.airport})`,
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
    dispatch(
      searchFlight({
        ...filter,
        departureDate: addDays(date[0].startDate, 1).toJSON().slice(0, 10),
        arrivalDate: addDays(date[0].endDate, 1).toJSON().slice(0, 10),
        departureAirport: options.departureAirport.value,
        arrivalAirport: options.arrivalAirport.value,
      })
    );
  };
  return (
    <StyledFormControl>
      <DatePicker date={date} setDate={setDate} />
      {roundtrip && <DatePicker date={returnDate} setDate={setReturnDate} />}
      <h3>
        Number of Passangers <People />
      </h3>
      <Input
        id="my-input"
        min={1}
        type="number"
        name="passangers"
        value={filter.passangers}
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
      <FormControlLabel
        control={
          <Checkbox
            checked={roundtrip}
            onChange={() => setRoundtrip(!roundtrip)}
            name="roundtrip"
            color="primary"
          />
        }
        label="Roundtrip"
      />
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
  );
};

export default FlightSearch;
