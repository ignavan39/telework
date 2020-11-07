import { randomInt } from 'crypto'
import { stat } from 'fs'
import { platform } from 'os'
import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'
import { useSelector } from 'react-redux'
import { AnswerState } from '../store/answersReducer'

export const StatesChart: React.FC = () => {
  
    const [state, setState] = useState<string>('all')
    const answers = useSelector((state: AnswerState) => state.answers)
    const states = useSelector((state: AnswerState) => state.states)

    const options = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }

    const parseData = () => {
        const answersMap = new Map<string, number>()
        let totalNumberHere = 0
        if (state == 'all') {
            answers.map(item => {
                totalNumberHere++;
                if (answersMap.has(item.platform)) {
                    let counter = answersMap.get(item.platform);
                    if (counter) {
                        counter++;
                        answersMap.set(item.platform, counter)
                    }
                } else {
                    answersMap.set(item.platform, 1);
                }
            })
        }
        const labels = Array.from(answersMap.keys())
        let counters = Array.from(answersMap.values());
        counters = counters.map(item=>((item/totalNumberHere)*100))
        console.log(counters)
        let colors = Array<string>()
        for(let i=0;i<counters.length;i++){
            colors.push(`rgb(
                ${Math.floor(Math.random() * Math.floor(255))}
                ,${Math.floor(Math.random() * Math.floor(255))}
                ,${Math.floor(Math.random() * Math.floor(255))})`)
        }
       return{
            labels,
            datasets:[{
                data:counters,
                backgroundColor:colors,
                borderWidth: 1
            }]
        }

    }

    return (
        <div>
            <Bar data={parseData()} options={options}></Bar>
        </div>
    )
}