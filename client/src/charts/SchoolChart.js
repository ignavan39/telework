import React, { useCallback, useEffect, useState } from 'react'

import { observer } from "mobx-react";
import CanvasReactJs from '../canvasjs/canvasjs.react'

import Answer from '../../src/store/teachers'
const CanvasJs = CanvasReactJs.CanvasJS
const CanvasJSChart = CanvasReactJs.CanvasJSChart

const SchoolChart = () => {

    const { schoolSet } = Answer
    const { answers } = Answer
    const [state, setState] = useState('all')
    const [dataPoints, setDataPoints] = useState([])
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

    let options = {
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
                dataPoints: dataPoints
            }
        ]
    }
    const fillMap = () => {
        parseData(state)
        const values = [...answerMap.values()]
        const keys = [...answerMap.keys()]

        let localCounter = 0
        for (let item of values) {
            localCounter = localCounter + item
        }
        console.log(localCounter)
        setDataPoints((values.map((item, idx) => {
            return {
                label: (keys[idx]).toString(),
                y: ((item / localCounter).toFixed(2) * 100)
            }
        })))

    }
    const selectHandler = (event) => {
        //event.persist();
        // event.preventDefault()
        setState(event.target.value)
        fillMap()
        options = {
            data: [
                {
                    indexLabel: "{y}",
                    type: "bar",
                    dataPoints
                }
            ]
        }
        console.log(options)
        console.log(state)
    }




    return (
        <div style={{ height: '60vh' }}>
            <select onChange={selectHandler} value={state} defaultValue={state} aria-labelledby="dropdownMenuButton">
                <option value='all'>Все</option>
                {

                    schoolSet.map((item, idx) => (
                        <option key={idx} value={item}>{item}</option>
                    ))

                }
            </select>
            <div style={{ width: '45vw', margin: 'auto 2vw' }}>
                <CanvasJSChart options={options} />
            </div>
        </div>
    );
}

export default observer(SchoolChart)