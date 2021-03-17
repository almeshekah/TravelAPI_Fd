import React from "react";
import { useParams, Redirect, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import {
  DetailWrapper,
  GoButtonStyled,
  ButtonWrapper,
  ItemWrapper,
} from "./styles";
import { AddButtonStyled } from "../../styles";
import FlightList from "../FlightList";

const AirlineDetail = () => {
  const { airlineSlug } = useParams();

  const allFlights = useSelector((state) => state.flightReducer.flights);

  const airline = useSelector((state) =>
    state.airlineReducer.airlines.find(
      (_airline) => _airline.slug === airlineSlug
    )
  );

  if (!airline) return <Redirect to="/airlines" />;

  const flights = airline.flights.map((flight) =>
    allFlights.find((_flight) => _flight.id === flight.id)
  );
  return (
    <>
      <Helmet>
        <title>{airline.name}</title>
      </Helmet>
      <ItemWrapper>
        <h1>{airline.name}</h1>
        <img src={airline.logo} alt={airline.name} />
      </ItemWrapper>
      <ButtonWrapper>
        <Link to={`/airlines/${airline.id}/flights/new`}>
          <AddButtonStyled>Add flights</AddButtonStyled>
        </Link>
        <Link to="/airlines">
          <GoButtonStyled>Back to airlines</GoButtonStyled>
        </Link>
      </ButtonWrapper>

      <span>&nbsp;&nbsp;</span>

      <FlightList flights={flights} key={flights.id} />
    </>
  );
};

export default AirlineDetail;
