import { TimeRangeButton } from "./styles";
import { Box } from "@material-ui/core";

export const timeFilter = (flights, time, set) => {
  return flights.filter(
    (flight) =>
      flight[set] >=
        (time.includes("Morning")
          ? 5
          : time.includes("Afternoon")
          ? 12
          : time.includes("Evening")
          ? 18
          : 0) &&
      flight[set] <
        (time.includes("Evening")
          ? 24
          : time.includes("Afternoon")
          ? 18
          : time.includes("Morning")
          ? 12
          : 24)
  );
};

export const priceFilter = (flights, min, max, travelClassId) => {
  return flights.filter(
    (flight) =>
      flight[`${travelClassId === 1 ? "economy" : "business"}Price`] > min &&
      flight[`${travelClassId === 1 ? "economy" : "business"}Price`] < max
  );
};

export const airlineFilter = (flights, airlinese) => {
  return flights.filter((flight) => airlinese.includes(flight.airlines.name));
};

const times = ["Morning", "Afternoon", "Evening"];

export const timeButtons = (filter, handleFilter, set) =>
  times.map((time) => (
    <Box m-r={2} p={1}>
      <TimeRangeButton
        variant="contained"
        active={filter[set].includes(time)}
        color={filter[set].includes(time) ? "primary" : "default"}
        onClick={() => handleFilter(time, set)}
      >
        {time}
      </TimeRangeButton>
    </Box>
  ));
