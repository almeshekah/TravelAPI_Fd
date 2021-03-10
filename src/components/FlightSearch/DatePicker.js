import React from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const DatePicker = ({ date, setDate }) => {
  return (
    <DateRangePicker
      onChange={(item) => setDate([item.selection])}
      showSelectionPreview={true}
      moveRangeOnFirstSelection={true}
      months={1}
      ranges={date}
      direction="horizontal"
    />
  );
};

export default DatePicker;
