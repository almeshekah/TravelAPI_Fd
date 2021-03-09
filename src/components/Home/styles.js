import styled from "styled-components";
import FlightSearch from "../FlightSearch";

export const Description = styled.p`
  text-align: center;
`;

export const HomeImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 100%;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const StyledFlightSearch = styled(FlightSearch)`
  position: absolute;
  top: 35px;
  left: 25%;
  width: 100vw;
`;
