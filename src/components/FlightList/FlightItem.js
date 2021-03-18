import React from "react";
import { Helmet } from "react-helmet";

import UpdateButton from "../buttons/UpdateButton";

const FlightItem = ({ flight }) => {
  const stringTime = (time) => {
    let hrs = Math.floor(time);
    let mins = Math.round((time % 1) * 60);
    return `${hrs > 12 ? hrs - 12 : hrs}:${mins > 9 ? mins : `0${mins}`} ${
      hrs >= 12 ? "PM" : "AM"
    }`;
  };
  const stringDate = (date) => date.split("-").reverse().join("/");
  return (
    <>
      <Helmet>
        <title>Flights</title>
      </Helmet>
      <tr>
        <td>{flight.name}</td>
        <td>{stringDate(flight.departureDate)}</td>
        <td>{stringTime(flight.departureTime)}</td>
        <td>{stringTime(flight.arrivalTime)}</td>
        <td>{flight.economyPrice} BD</td>
        <td>{flight.businessPrice} BD</td>
        <td>
          <UpdateButton
            airlineId={flight.airlineId}
            flightId={flight.id}
          ></UpdateButton>
        </td>
      </tr>
    </>
  );
};

export default FlightItem;
