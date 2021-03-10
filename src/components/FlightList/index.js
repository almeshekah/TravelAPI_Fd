import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { ListWrapper, Title, AddButtonStyled } from "./styles";
import FlightItem from "./FlightItem";

const FlightList = ({flights}) => {
  // const flights = useSelector((state) => state.flightReducer.flights);

  const flightList = flights.map((flight) => (
    <FlightItem flight={flight} key={flight.id} />
  ));

  return (
    <div>
      <Title>Flights</Title>
      <div>
        <ListWrapper>{flightList}</ListWrapper>
      </div>
    </div>
  );
};

export default FlightList;
