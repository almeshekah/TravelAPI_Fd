import React from "react";
import { Calendar } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const DatePicker = ({ filter, setFilter, set }) => {
  return (
    <Calendar
      onChange={(item) => setFilter({ ...filter, [set]: item })}
      date={filter[set]}
      minDate={set === "returnDate" ? filter.departureDate : new Date()}
    />
  );
};

export default DatePicker;
