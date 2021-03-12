import styled from "styled-components";
import { FormControl } from "@material-ui/core";

export const StyledFormControl = styled(FormControl)`
  display: flex;
  align-content: center;
  h2 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 559px;
    padding: 10px;
    background-color: white;
    position: absolute;
    left: 0;
    top: 380px;
  }
  Input {
    width: 50px;
  }
  div {
    .passanger {
      h3 {
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        align-content: center;
      }
    }
    .date {
      align-items: center;
      display: flex;
      flex-wrap: wrap;
      align-content: center;
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
