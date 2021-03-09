import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ItemWrapper } from "./styles";

const FlightItem = ({ flight }) => {
  return (
    <>
      <ItemWrapper>
        <Helmet>
          <title>Flights</title>
        </Helmet>
        <p>{flight.name}</p>
        <p>{flight.departureDate}</p>
        <p>{flight.arrivalDate}</p>
        <p>{flight.departureTime}</p>
        <p>{flight.arrivalTime}</p>
        <p>{flight.departureAirport}</p>
        <p>{flight.arrivalAirport}</p>
        <p>{flight.economyPrice}</p>
        <p>{flight.businessPrice}</p>
        <p>{flight.airlineId}</p>
      </ItemWrapper>
    </>
  );
};

export default FlightItem;
