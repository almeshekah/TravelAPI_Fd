import styled from "styled-components";
import { Typography } from "@material-ui/core";

export const StyledPrice = styled(Typography)`
  text-align: right;
`;

export const StyledCard = styled.div`
  margin-bottom: 2%;
  background: ${(props) => (props.selected ? "#90ee90" : "white")};
`;

export const StyledList = styled.div`
  margin: 5%;
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
`;
