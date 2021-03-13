import styled from "styled-components";

export const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  img {
    width: 40%;
    float: left;
  }
  p {
    vertical-align: middle;
  }
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  align-items: center;
  justify-content: center;
  flex: 1 0 21%;
  margin: 5px;
  // height: 100px;
`;

export const GoButtonStyled = styled.button`
  display: inline-block;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  color: #fff;
  background-color: #326eb3;
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
