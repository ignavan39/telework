import React, { useEffect } from "react";
import logo from "./logo.svg";
import styled from "styled-components";
import { fetchAnswers } from "./store/answersReducer";
import { useDispatch } from "react-redux";
import { StatesChart } from "./views/statesChart";

const Root = styled.div`
  max-width: 100vw;
  background-color: #000127;
  min-height:100vh;
`;

const Container = styled.div`
  margin: 0 5vw;
`;

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAnswers());
  }, []);
  return (
    <Root>
      <Container>
        <StatesChart />
      </Container>
    </Root>
  );
}

export default App;
