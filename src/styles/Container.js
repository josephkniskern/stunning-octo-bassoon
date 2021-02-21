import styled from "styled-components";

export const Container = styled.div`
  border: 10px solid red;
  height: 100%;
  width: auto;
  display: grid;
  grid-template-columns: repeat(3, 20px [col-start]);
  grid-template-rows: 25% 100px auto;
  display: flex;
  justify-content: center;
  align-content: space-around;
  font-family: "Roboto", sans-serif;
`;
