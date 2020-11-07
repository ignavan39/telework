import React, { ChangeEvent, useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { AnswerState } from "../store/answersReducer";
import { Header, SelectButton, Title, Wrapper } from "./shared/styles";


export const StatesChart: React.FC = () => {
  const [state, setState] = useState<string>("all");
  const answers = useSelector((state: AnswerState) => state.answers);
  const states = Array.from(
    useSelector((state: AnswerState) => state.states).values()
  );

  let totalCount = answers.length;
  const parseData = () => {
    const answersMap = new Map<string, number>();
    let totalNumberHere = 0;
    if (state === "all") {
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
    } else {
      answers.map((item) => {
        if (item.state.trim() === state.trim()) {
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

    totalCount = totalNumberHere;
    return {
      labels,
      datasets: [
        {
          data: counters,
          backgroundColor: colors,
          borderColor: "#fff",
          borderWidth: 2,
        },
      ],
    };
  };

  const onSelectHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value)
    setState(event.target.value);
  };

  return (
    <Wrapper>
      <Header>
        <SelectButton value={state} onChange={onSelectHandler}>
          <option value="all">Все районы</option>
          {states.map((item,idx) => (
            <option value={item} key={idx}>{item}</option>
          ))}
        </SelectButton>
        <Title>Всего отвтетов:{totalCount}</Title>
      </Header>
      <Pie
        data={parseData()}
        options={{ responsive: true, maintainAspectRatio: false }}
      />
      <Title>{state === 'all' ? "Все районы" : state}</Title>
    </Wrapper>
  );
};
