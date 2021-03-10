import React from "react";
import { useParams, Redirect, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ListWrapper, Title, AddButtonStyled } from "./styles";
import AirlineItem from "./AirlineItem";

const AirlineList = ({ airlines }) => {

  const airlineList = airlines.map((airline) => (
    <AirlineItem airline={airline} key={airline.id} />
  ));

  return (
    <div>
      <Title>Airlines</Title>
      <div>
        <ListWrapper>{airlineList}</ListWrapper>
      </div>
    </div>
  );
};

export default AirlineList;
