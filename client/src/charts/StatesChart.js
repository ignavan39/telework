import React from 'react'

/*
import { observer } from "mobx-react";

import Answer from '../../src/store/teachers'


const CanvasJSChart = CanvasReactJs.CanvasJSChart
const StatesChart = () => {
    const {answers} = Answer
    const {stateSet} = Answer
    const answersMap = new Map()

    const [state,setState] = useState('all')
    useEffect(() => {
        Answer.fetchAnswers()

    }, [])


    const parseToMap = () => {
        let resMap = new Map();
        answers.forEach(it => {
            resMap.has(it.school) ? resMap.set(it.school, resMap.get(it.school)+1) : resMap.set(it.school, 1)
        });
        return resMap;
    }

    const parseData = () => {
        let map = parseToMap();
        let chartData = []
        let peopleAmount = 0;
        for(let value of map.values()){
            peopleAmount += value;
        }
        map.forEach((v, k) => {
            chartData.unshift({y : Math.floor(v/peopleAmount * 10000)/100, label: k})})
        return chartData;
    }
    
    const selectHandler = (event) => {
        event.persist();
        setState((prev)=> (event.target.value))
    }
    //console.log(state)
    //console.log(stateSet)
    //console.log(parseData());
    const options = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "dark2", // "light1", "dark1", "dark2"
        title: {
            text: "Trip Expenses"
        },
        data: [{
            type: "pie",
            indexLabel: "{label}: {y}%",
            startAngle: -90,
            dataPoints:
                parseData()
                /*
                [
                { y: 20, label: "На за" },
                { y: 24, label: "Food & Drinks" },
                { y: 20, label: "Accomodation" },
                { y: 14, label: "Transportation" },
                { y: 12, label: "Activities" },
                { y: 10, label: "Misc" }
                ]
                */
/*
        }]
    }

    return (
        <div>
        <select onChange={selectHandler}>
            <option defaultValue='all'>Все</option>
            {
                stateSet.map((item,idx)=>(
                    <option value={item} key={idx} >{item}</option>
                ))
            }
        </select>
        <div style={{width:'45vw', margin:'auto 2vw'}}>
            <CanvasJSChart options={options}
            /* onRef={ref => this.chart = ref} */
/*
            />
        </div>
        </div>
    )
}
*/
