import React from "react";
import { useParams, Redirect, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import { DetailWrapper, AddButtonStyled, GoButtonStyled } from "./styles";
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
      <Link to={`/airlines/${airline.id}/flights/new`}>
        <AddButtonStyled>Add flights</AddButtonStyled>
      </Link>
      <Link to="/airlines">
        <GoButtonStyled>Back to airlines</GoButtonStyled>
      </Link>
      <DetailWrapper>
        <h1>{airline.name}</h1>
        <img src={airline.image} alt={airline.name} />
        <FlightList flights={flights} key={flights.id} />
      </DetailWrapper>
    </>
  );
};

export default AirlineDetail;
