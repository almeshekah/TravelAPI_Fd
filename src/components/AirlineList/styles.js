import styled from "styled-components";

export const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  align-items: center;
  justify-content: center;
  flex: 1 0 21%;
  margin: 5px;
  // height: 100px;
  color: #1d3557;
`;

export const Title = styled.h2`
  text-align: center;
  color: #111;
  font-family: "Roboto", sans-serif;
  font-size: 30px;
  font-weight: bold;
  letter-spacing: -1px;
  line-height: 1;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1d3557;
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
  padding: 25px;
  cursor: pointer;
  -moz-osx-font-smoothing: grayscale;
  backface-visibility: hidden;
  transform: translateZ(0);
  transition: transform 0.25s ease-out;
`;
