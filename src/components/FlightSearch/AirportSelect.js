import React from "react";
import Select from "react-select";

const AirportSelect = ({ options, handleOptions, _options, set }) => {
  return (
    <div>
      <Select
        value={options[set]}
        onChange={handleOptions}
        options={_options}
      />
    </div>
  );
};

export default AirportSelect;
