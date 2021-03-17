import styled from "styled-components";

export const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  img {
    align-self: flex-start;
    max-width: 100%;
    margin-top: 20px;
    width: 20%;
  }
  p {
    vertical-align: middle;
  }
`;

export const GoButtonStyled = styled.button`
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  color: #fff;

  background-color: #e63946;
  font-size: 15px;
  font-family: "Roboto", sans-serif;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImgWrapper = styled.img`
  width: 100px;
  height: 100px;
`;

export const ItemWrapper = styled.div`
  margin: 20px;
  img {
    width: 200px;
    height: 200px;
  }
  text-align: center;
  color: #1d3557;
  display: flex;
  flex-direction: column;
  background-color: #fafdf9;
  border: 1px solid grey;
  border-radius: 5px;
  width: 300px;
  height: 300px;
  padding: 25px;
`;
