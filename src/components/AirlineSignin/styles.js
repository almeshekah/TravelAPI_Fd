import styled, { createGlobalStyle } from "styled-components";

export const FormStyled = styled.div`
  max-width: 500px;
  padding: 10px 20px;
  background: #f4f7f8;
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
  background-color: #c4eae1;
  color: #2d5631;
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
  background: #1a70bc;
  font-size: 18px;
  text-align: center;
  font-style: normal;
  width: 100%;
  border: 1px solid #124c82;
  border-width: 1px 1px 3px;
  margin-bottom: 10px;
  font-family: "Roboto", sans-serif;
  &:hover {
    background: #0c3255;
  }
`;