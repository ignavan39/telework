import React, { useEffect, useState } from 'react'

import { observer } from "mobx-react";
import CanvasReactJs from '../canvasjs/canvasjs.react'

import Answer from '../../src/store/teachers'
const CanvasJs = CanvasReactJs.CanvasJS
const CanvasJSChart = CanvasReactJs.CanvasJSChart

const SchoolChart = () => {

    const { schoolSet } = Answer
    const { answers } = Answer
    const [state, setState] = useState('all')

    let dataPoints = []
    const answerMap = new Map()
    const parseData = (option) => {
        answers.map((item) => {
            if (item.platform.trim() !== "Дневник.ру" &&
                item.platform.trim() !== "дневник.ру") {
                if (item.school.trim() === option.trim()) {
                    if (answerMap.has(item.platform.trim())) {
                        let counter = answerMap.get(item.platform.trim())
                        counter++
                        answerMap.set(item.platform.trim(), counter)
                    }
                    else {
                        answerMap.set(item.platform.trim(), 1)
                    }
                }

            }
        })

    }

    const fillMap =() =>{
        parseData(state)
        const values = [...answerMap.values()]
        const keys = [...answerMap.keys()]

        let localCounter = 0
        for(let item of values){
            localCounter = localCounter+item
        }
        console.log(localCounter)
        dataPoints = (values.map((item, idx) => {
            return {
                label: (keys[idx]).toString(),
                y: ((item / localCounter)*100)
            }
        }))

        return dataPoints

    }
    const selectHandler = (event) => {
        event.persist();
        setState((prev) => (event.target.value))
        fillMap()
        setOptions((prev) => (
            {
                ...prev,
                data: [
                    {
                        indexLabel: "{y}",
                        // Change type to "doughnut", "line", "splineArea", etc.
                        type: "bar",
                        dataPoints
                    }
                ]
            }
        ))
        console.log(options)

    }

  
    const [options, setOptions] = useState({
        theme: 'dark2',
        animationEnabled: true,
        axisX: {
            title: "Social Network",
            reversed: true,
        },
        axisY: {
            title: "Monthly Active Users",
            includeZero: true,
            suffix: "%",
        },
        title: {
            text: "Basic Column Chart"
        },
        data: [
            {
                indexLabel: "{y}",
                // Change type to "doughnut", "line", "splineArea", etc.
                type: "bar",
                dataPoints: fillMap()
            }
        ]
    })
    return (
        <div style={{ height: '60vh' }}>
            <select onChange={selectHandler}>
                <option defaultValue='all'>Все</option>
                {
                    schoolSet.map((item, idx) => (
                        <option value={item} key={idx} >{item}</option>
                    ))
                }
            </select>
            <div style={{ width: '45vw', margin: 'auto 2vw' }}>
                <CanvasJSChart options={options}
                /* onRef={ref => this.chart = ref} */
                />  </div>
        </div>
    );
}

export default observer(SchoolChart)