import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";

import { ItemWrapper } from "./styles";

const AirlineItem = ({ airline }) => {
  const flights = useSelector((state) => state.flightReducer.flights);

  return (
    <>
      <ItemWrapper>
        <Helmet>
          <title>Airline</title>
        </Helmet>
        <p>{airline.name}</p>
        <Link to={`airlines/${airline.slug}`}>
          <img src={airline.logo} alt={airline.name} />
        </Link>
      </ItemWrapper>
    </>
  );
};

export default AirlineItem;
