import React from "react";
//Styling
import {
  Button,
  Divider,
  Typography,
  CardContent,
  CardActions,
  Card,
} from "@material-ui/core";
import { Flight, DateRange, Schedule } from "@material-ui/icons/";
import { StyledPrice, StyledCard, StyledImage } from "./styles";

const FlightItem = ({ flight, selectedFlight, handleSelect }) => {
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
      <StyledCard selected={selectedFlight == flight.id}>
        <CardContent>
          <Typography variant="h5">{flight.name}</Typography>
          <Typography variant="h5">
            <Schedule /> {stringTime(flight.departureTime)} -{" "}
            {stringTime(flight.arrivalTime)}
          </Typography>
          <Typography variant="h6">
            <DateRange /> {stringDate(flight.departureDate)}
          </Typography>
          <Typography variant="h7">
            <Flight />
            {flight.origin.airport}-({flight.origin.code}) to{" "}
            {flight.destination.airport}-({flight.destination.code})
          </Typography>
          <Typography variant="subtitle1">
            <StyledImage
              src={flight.airlines.logo}
              alt={flight.airlines.name}
            />{" "}
            {flight.airlines.name}
          </Typography>
          <StyledPrice variant="h4">
            Starting From: {flight.economyPrice} BD
          </StyledPrice>
        </CardContent>
        <CardActions>
          <Button variant="outlined" onClick={() => handleSelect(flight.id)}>
            Select
          </Button>
        </CardActions>
      </StyledCard>
      <Divider />
    </>
  );
};

export default FlightItem;
