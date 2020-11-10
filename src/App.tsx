import React, { useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { fetchAnswers } from "./store/answersReducer";
import { useDispatch } from "react-redux";
import { StatesChart } from "./views/statesChart";
import { SchoolChart } from "./views/schoolChart";
import { ReadyChart } from "./views/readyChart";

const darkMode = "#000127";


const Container = styled.div`
  margin: 0 5vw;
  @media (max-width: 1100px) {
    margin: 1rem;
  }
`;

const Preview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 800;
  color: #fff;
  margin: 5rem auto;
  text-align: center;
  @media (max-width: 1100px) {
    font-size: 0.8rem;
  }
`;
const Root = styled.div`
  max-width: 100vw;
  background: ${darkMode};
  max-height: 100vh;
  height: 100vh;
  overflow-y: scroll;
  position: relative;
  margin: 0;
  padding: 0;
`;

const Title = styled.h2`
  font-size: 2rem;
`;
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAnswers());
  }, []);
  return (
    <Root>
      <Container>
        <Preview>
          <Title> Статистические данные</Title> Здесь представлена информация о
          том, какими платформами пользуются(пользовались) учителя во время
          режима самоизоляции для осуществления процесса дистанционного обучения
        </Preview>
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
