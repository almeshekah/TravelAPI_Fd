import styled from "styled-components";
import { FormControl } from "@material-ui/core";
import { Button, Input, Grid } from "@material-ui/core";

export const StyledFormControl = styled(FormControl)`
  display: flex;
  align-content: center;
  h2 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 559px;
    padding: 10px;
    background-color: #1d3557;
    position: absolute;
    left: 0;
    top: 380px;
  }
  Input {
    width: 50px;
  }
  div {
    .passenger {
      h3 {
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        align-content: center;
        color: #1d3557;
      }
    }
    .date {
      align-items: center;
      display: flex;
      flex-wrap: wrap;
      align-content: center;
      color: #1d3557;
    }
  }
`;

export const styledDate = styled.div`
  .date {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
  }
`;
