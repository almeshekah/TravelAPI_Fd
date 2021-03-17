import styled from "styled-components";
import { Typography } from "@material-ui/core";

export const StyledPrice = styled(Typography)`
  text-align: right;
  color: #1d3557;
`;

export const StyledCard = styled.div`
  margin-bottom: 2%;
  background: ${(props) => (props.selected ? "#A8DADC" : "white")};
`;

export const StyledList = styled.div`
  margin: 5%;
  color: #1d3557;
`;

export const StyledImage = styled.img`
  border-radius: 5px;
  height: 70px;
  width: auto;
`;

export const StyledMessage = styled.h1`
  font-size: 20px;
  text-align: center;
  margin: auto;
  color: #1d3557;
`;
