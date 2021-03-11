import React from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const DatePicker = ({ filter, setFilter, set }) => {
  return (
    <DateRangePicker
      onChange={(item) => setFilter({ ...filter, [set]: item.selection })}
      showSelectionPreview={true}
      moveRangeOnFirstSelection={true}
      months={1}
      ranges={[filter[set]]}
      direction="horizontal"
    />
  );
};

export default DatePicker;
