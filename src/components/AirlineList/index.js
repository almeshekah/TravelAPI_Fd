import React from "react";
import { ListWrapper, Title } from "./styles";
import AirlineItem from "./AirlineItem";
import { useSelector } from "react-redux";

const AirlineList = ({ airlines }) => {
  const { user } = useSelector((state) => state.authReducer);

  const airlineList = airlines
    .filter((airline) => airline.name === user.name)
    .map((airline) => <AirlineItem airline={airline} key={airline.id} />);

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
