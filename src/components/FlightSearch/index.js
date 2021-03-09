import { addDays } from "date-fns";
import { useState } from "react";
import { Search, People, FlightLand, FlightTakeoff } from "@material-ui/icons/";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import { StyledFormControl } from "./styles";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Loading";
import { searchFlight } from "../../store/actions/flightActions";

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
  const [passangers, setPassangers] = useState(2);
  const [options, setOptions] = useState({
    arrivalAirport: null,
    departureAirport: null,
  });
  const [filter, setFilter] = useState({
    passangers: 2,
    arrivalAirport: "",
    departureAirport: "",
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
    console.log(selectedOption);
    setOptions({ ...options, [selectedOption.name]: selectedOption });
    setFilter({ ...filter, [selectedOption.name]: selectedOption.value });
  };
  const handleChange = (event) => {
    setFilter({ ...filter, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    console.log({
      ...filter,
      departureDate: date[0].startDate.toJSON().slice(0, 10),
      arrivalDate: date[0].endDate.toJSON().slice(0, 10),
    });
    dispatch(
      searchFlight({
        ...filter,
        departureDate: date[0].startDate.toJSON().slice(0, 10),
        arrivalDate: date[0].endDate.toJSON().slice(0, 10),
      })
    );
  };
  return (
    <StyledFormControl>
      <DateRangePicker
        onChange={(item) => setDate([item.selection])}
        showSelectionPreview={true}
        moveRangeOnFirstSelection={false}
        months={1}
        ranges={date}
        direction="horizontal"
      />
      <h3 htmlFor="my-input">
        Number of Passangers <People />
      </h3>
      <Input
        id="my-input"
        min={1}
        type="number"
        name="passangers"
        value={passangers}
        onChange={(event) => setPassangers(event.target.value)}
      />
      <h3 htmlFor="my-input">
        Departure Airport <FlightTakeoff />
      </h3>
      <Select
        value={options.departureAirport}
        onChange={handleOptions}
        options={departureOptions}
      />
      <h3 htmlFor="my-input">
        Arrival Airport <FlightLand />
      </h3>
      <Select
        value={options.arrivalAirport}
        onChange={handleOptions}
        options={arrivalOptions}
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
