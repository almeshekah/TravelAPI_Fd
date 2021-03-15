import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import { ItemWrapper } from "./styles";

const AirlineItem = ({ airline }) => {
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
