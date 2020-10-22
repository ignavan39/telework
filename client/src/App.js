import React, { useEffect } from 'react';

import { observer } from "mobx-react";
import logo from './logo.svg';
import './App.css';
import StatesChart from './charts/StatesChart'
import SchoolChart from './charts/SchoolChart'

import Answer from '../src/store/teachers'

const App = () => {

  useEffect(() => {
    Answer.fetchAnswers()

  }, [])

  return (
    <div className="App">
      <div className="App-header">
        <StatesChart/>
        <SchoolChart/>
      </div>
    </div>
  );
}

export default observer(App);
