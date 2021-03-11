import React from "react";
import { Link } from "react-router-dom";
import { AddButtonStyled } from "../FlightList/styles";

const UpdateButton = ({ airlineId, flightId }) => {
  return (
    <div>
      <Link to={`/airlines/${airlineId}/flights/${flightId}/update`}>
        <AddButtonStyled>Update</AddButtonStyled>
      </Link>
    </div>
  );
};

export default UpdateButton;
