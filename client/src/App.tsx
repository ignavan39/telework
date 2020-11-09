import React, { useEffect } from "react";
import styled from "styled-components";
import { fetchAnswers } from "./store/answersReducer";
import { useDispatch } from "react-redux";
import { StatesChart } from "./views/statesChart";
import { SchoolChart } from "./views/schoolChart";
import { ReadyChart } from "./views/readyChart";

const Root = styled.div`
  max-width: 100vw;
  background-color: #000127;
  max-height: 100vh;
  height: 100vh;
  overflow-y: scroll;
  position: relative;
  margin: 0;
  padding: 0;
`;

const Container = styled.div`
  margin: 0 5vw;
  @media (max-width: 110px) {
    margin: 1px;
  }
`;


const Preview = styled.div`

display:flex;
justify-content:center;
align-items:center;
font-size:1rem;
font-weight:800;
color:#fff;
margin:5rem auto;

`
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAnswers());
  }, []);
  return (
    <Root>
      <Container>
        <Preview></Preview>
        <StatesChart />
        <hr></hr>
        <SchoolChart />
        <hr />
        <ReadyChart />
      </Container>
    </Root>
  );
}

export default App;
