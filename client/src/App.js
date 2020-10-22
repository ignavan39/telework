import React, { useEffect } from 'react';

import { observer } from "mobx-react";
import logo from './logo.svg';
import './App.css';
import './canvasjs/canvasjs.react'

import Answer from '../src/store/teachers'
const App = () => {

  useEffect(()=>{
      Answer.fetchAnswers()
  },[])


  console.log(Answer.answers)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default observer(App);
