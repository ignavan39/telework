import React from 'react'

import { observer } from "mobx-react";
import CanvasReactJs from '../canvasjs/canvasjs.react'

const CanvasJs = CanvasReactJs.CanvasJS
const CanvasJSChart = CanvasReactJs.CanvasJSChart

const SchoolChart = () => {

    const options = {
        theme:'dark2',
        title: {
            text: "Basic Column Chart"
        },
        data: [
        {
            // Change type to "doughnut", "line", "splineArea", etc.
            type: "column",
            dataPoints: [
                { label: "Apple",  y: 10  },
                { label: "Orange", y: 15  },
                { label: "Banana", y: 25  },
                { label: "Mango",  y: 30  },
                { label: "Grape",  y: 28  }
            ]
        }
        ]
    }
    
    return (
    <div style={{width:'45vw', margin:'auto 2vw'}}>
        <CanvasJSChart options = {options} 
            /* onRef={ref => this.chart = ref} */
        />  </div>
    );
}

export default observer(SchoolChart )