import React, { ChangeEvent, useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { AnswerState } from "../store/answersReducer";
import { Header, SelectButton, Title, Wrapper } from "./shared/styles";


export const SchoolChart : React.FC = () => {
    const schools = Array.from(
        useSelector((state: AnswerState) => state.schools).values()
      );
    const [state, setState] = useState<string>('');
    const answers = useSelector((state: AnswerState) => state.answers);
    
    useEffect(()=>{
        setState(schools[0])
    },[answers])
    const parseData = () => {
      const answersMap = new Map<string, number>();
      let totalNumberHere = 0;
      console.log(state);
        answers.map((item) => {
          if (item.school === state) {
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
            {schools.map((item,idx) => (
              <option value={item} key={idx}>{item}</option>
            ))}
          </SelectButton>
        </Header>
        <Pie
          data={parseData()}
          options={{ responsive: true, maintainAspectRatio: false }}
        />
        <Title>{state}</Title>
      </Wrapper>
    );
  };