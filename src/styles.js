import { Link } from "react-router-dom";

import styled, { createGlobalStyle } from "styled-components";
import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1d3557",
    },
  },
});

export const Logo = styled(Link)`
  padding: "0.25em 1em";

  img {
    width: 100px;
  }
`;

export const GlobalStyle = createGlobalStyle`
  html {
    --primary-color: #1d3557;
  --dark-color: #333333;
  --light-color: #f4f4f4;
 
  }

  * {
  margin: 0;
  padding: 0;
}
body{
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  background-color: #fff;
  color: #333;

background-color: #d5fefd;
background-image: linear-gradient(315deg, #d5fefd 0%, #fffcff 74%);
height: 100%;
width: 100%;
  // position: absolute;
  // top: 50%;
  // left: 50%;
  // transform: translateX(-50%) translateY(-50%);
  // display: flex;
  // align-items: center;
  // justify-content: center;
  // flex-direction: column;
  background-attachment: fixed;

}
`;

export const FormStyled = styled.div`
  max-width: 500px;
  padding: 10px 20px;
  margin: 10px auto;
  padding: 20px;
  background: #f4f7f8;
  border-radius: 8px;
  font-family: "Roboto", sans-serif;
`;
export const FieldSetStyled = styled.fieldset`
  border: none;
`;
export const LegendStyled = styled.legend`
  font-size: 1.4em;
  margin-bottom: 10px;
`;

export const LabelStyled = styled.label`
  display: block;
  margin-bottom: 8px;
  font-family: "Roboto", sans-serif;
`;

export const InputFieldStyled = styled.input`
  font-family: "Roboto", sans-serif;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 4px;
  font-size: 18px;
  margin: 0;
  outline: 0;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  background-color: #a8dadc;
  color: #1d3557;
  -webkit-box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;
  margin-bottom: 30px;
`;

export const FormAddButtonStyled = styled.button`
  position: relative;
  display: block;
  padding: 19px 39px 18px 39px;
  color: #fff;
  margin: 0 auto;
  background: #1d3557;
  font-size: 18px;
  text-align: center;
  font-style: normal;
  width: 100%;
  border: 1px solid #1d3557;
  border-width: 1px 1px 3px;
  margin-bottom: 10px;
  font-family: "Roboto", sans-serif;
  &:hover {
    background: #457b9d;
  }
`;

export const AddButtonStyled = styled.button`
  display: inline-block;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  color: #fff;
  background-color: #1d3557;
  font-size: 15px;
  font-family: "Roboto", sans-serif;
  // float: right;
  // display: flex;
  align-items: flex-start;
  align-items: center;
  justify-content: center;
  block {
    display: block;
    width: 100%;
  }
  &:focus {
    outline: none;
  }
  &:active {
    transform: scale(0.98);
  }
`;
