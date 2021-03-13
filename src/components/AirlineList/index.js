import React from "react";
import { ListWrapper, Title } from "./styles";
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
