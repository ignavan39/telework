import React, { useEffect, useState } from 'react'

import { observer } from "mobx-react";

import CanvasReactJs from '../canvasjs/canvasjs.react'

import Answer from '../../src/store/teachers'
const CanvasJs = CanvasReactJs.CanvasJS
const CanvasJSChart = CanvasReactJs.CanvasJSChart
const StatesChart = () => {
    const {answers} = Answer
    const {stateSet} = Answer
    const answersMap = new Map()

    const [state,setState] = useState('all')
    useEffect(() => {
        Answer.fetchAnswers()

    }, [])

    const parseData = () => {


    }
    const selectHandler = (event) => {
        event.persist();
        setState((prev)=> (event.target.value))
        
    }
    console.log(state)
    console.log(stateSet)
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
            dataPoints: [
                { y: 20, label: "Airfare" },
                { y: 24, label: "Food & Drinks" },
                { y: 20, label: "Accomodation" },
                { y: 14, label: "Transportation" },
                { y: 12, label: "Activities" },
                { y: 10, label: "Misc" }
            ]
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
            />
        </div>
        </div>
    )
}

export default observer(StatesChart)