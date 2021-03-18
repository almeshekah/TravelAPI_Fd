import styled from "styled-components";
export const DetailWrapper = styled.div`
  color: black;
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

export const ItemWrapper = styled.div`
  margin-left: 700px;
  img {
    width: 200px;
    height: 200px;
    margin-left: 75px;
  }
  text-align: center;
  color: #1d3557;
  display: flex;
  flex-direction: column;
  background-color: #fafdf9;
  border: 1px solid grey;
  border-radius: 5px;
  width: 400px;
  height: 400px;
  padding: 25px;
`;
