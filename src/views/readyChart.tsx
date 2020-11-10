import React, { ChangeEvent, useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { AnswerState } from "../store/answersReducer";
import { Header, SelectButton, Title, Wrapper } from "./shared/styles";


export const ReadyChart: React.FC = () => {
  const [school, setSchool] = useState<string>("all");
  const answers = useSelector((state: AnswerState) => state.answers);
  const schools = Array.from(
    useSelector((state: AnswerState) => state.schools).values()
  );

  let totalCount = answers.length;
  const parseData = () => {
    const answersMap = new Map<string, number>();
    let totalNumberHere = 0;
    if (school === "all") {
      answers.map((item) => {
        totalNumberHere++;
        if (answersMap.has(item.ready)) {
          let counter = answersMap.get(item.ready);
          if (counter) {
            counter++;
            answersMap.set(item.ready, counter);
          }
        } else {
          answersMap.set(item.ready, 1);
        }
      });
    } else {
      answers.map((item) => {
        if (item.school.trim() === school.trim()) {
          totalNumberHere++;
          if (answersMap.has(item.ready)) {
            let counter = answersMap.get(item.ready);
            if (counter) {
              counter++;
              answersMap.set(item.ready, counter);
            }
          } else {
            answersMap.set(item.ready, 1);
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
    setSchool(event.target.value);
  };

  return (
    <Wrapper>
        <Title>Степень готовности к дистанционной работе на начало работы с 06.04 </Title>
      <Header>
        <SelectButton value={school} onChange={onSelectHandler}>
          <option value="all">Все школы</option>
          {schools.map((item,idx) => (
            <option value={item} key={idx}>{item}</option>
          ))}
        </SelectButton>
      </Header>
      <Pie
        data={parseData()}
        options={{ responsive: true, maintainAspectRatio: false }}
      />
      <Title>{school === 'all' ? "Все школы" : school}</Title>
    </Wrapper>
  );
};
