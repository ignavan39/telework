import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { AnswerState } from "../store/answersReducer";

const Wrapper = styled.div`
  width: auto;
  height: 60vh;
  display:flex;
  flex-direction:column;
  align-items:center;
`

const Title = styled.h2`
    font-weight:bold;
    color:#fff;
    text-align:center;
    margin-top:1rem;
`
const SelectButton = styled.select`
    text-align:center;
    width:50vw;
    margin:2rem;
`

export const StatesChart: React.FC = () => {
  const [state, setState] = useState<string>("all");
  const answers = useSelector((state: AnswerState) => state.answers);
  const states = Array.from(useSelector((state: AnswerState) => state.states).values());

  const parseData = () => {
    const answersMap = new Map<string, number>();
    let totalNumberHere = 0;
    if (state == "all") {
      answers.map((item) => {
        totalNumberHere++;
        if (answersMap.has(item.platform)) {
          let counter = answersMap.get(item.platform);
          if (counter) {
            counter++;
            answersMap.set(item.platform, counter);
          }
        } else {
          answersMap.set(item.platform, 1);
        }
      });
    }

    let counters = Array.from(answersMap.values());
    counters = counters.map((item) =>
      Math.round((item / totalNumberHere) * 100)
    );
    console.log(counters);
    let labels = Array.from(answersMap.keys());
    labels = labels.map((item, idx) => `${item} ${counters[idx]}%`);
    let colors = Array<string>();
    for (let i = 0; i < counters.length; i++) {
      colors.push(`rgb(
                ${Math.floor(Math.random() * Math.floor(255))}
                ,${Math.floor(Math.random() * Math.floor(255))}
                ,${Math.floor(Math.random() * Math.floor(255))})`);
    }
    return {
      labels,
      datasets: [
        {
          data: counters,
          backgroundColor: colors,
          borderColor:'#fff',
          borderWidth: 2
        },
      ],
    };
  };

  return (
    <Wrapper>
    <SelectButton value={state}>
        {
            states.map((item)=>(
                <option value={item}>{item}</option>
            ))
        }
    </SelectButton>
      <Pie
        data={parseData()}
        options={{ responsive: true, maintainAspectRatio: false }}
      />
      <Title>Все районы</Title>
    </Wrapper>
  );
};
