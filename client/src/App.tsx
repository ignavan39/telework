import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import { fetchAnswers } from "./store/answersReducer";
import { useDispatch } from "react-redux";

const Root = styled.div`
  max-width: 100vw;
`;

const Container = styled.div`
  margin:0 5vw;

`

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchAnswers())
  },[])
  return <Root><Container>123</Container></Root>;
}

export default App;
