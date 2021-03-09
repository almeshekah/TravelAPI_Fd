import { addDays } from "date-fns";
import { useState } from "react";
import { Search, People } from "@material-ui/icons/";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import { StyledFormControl } from "./styles";

const FlightSearch = () => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  const [passangers, setPassangers] = useState(2);

  console.log(date, passangers);
  return (
    <StyledFormControl>
      <DateRangePicker
        onChange={(item) => setDate([item.selection])}
        showSelectionPreview={true}
        moveRangeOnFirstSelection={false}
        months={2}
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
        value={passangers}
        onChange={(event) => setPassangers(event.target.value)}
      />
      <Button variant="contained" color="primary" fullWidth>
        <Search />
        Search Flights
      </Button>
    </StyledFormControl>
  );
};

export default FlightSearch;
