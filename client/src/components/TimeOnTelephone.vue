<template>
  <div class="section">
    <h3>Время у телефона</h3>
   
    <div v-if="datacollection">
      <pie-chart :chartData="datacollection" :options="options"></pie-chart>
    </div>

    <!--  </div>-->
  </div>
</template>



<script>
import PieChart from "./PieChart.js";
export default {
  props: ["optionSet", "teachers", "optionName"],
  name: "Chart",
  data() {
    return {
      filter: "", //this.choice === 'area' ? 'all' : '',
      size: Number,
      root: "",
      datacollection: null,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    };
  },
  components: {
    PieChart,
  },
    beforeMount(){
         console.log(this.optionSet);
      let teacherMap2 = new Map();
      for (let item of this.teachers) {
        if (teacherMap2.has(item.timeOnTelephone.trim())) {
          let counter = teacherMap2.get(item.timeOnTelephone.trim());
          counter++;
          teacherMap2.set(item.timeOnTelephone.trim(), counter);
        } else {
          teacherMap2.set(item.timeOnTelephone.trim(), 1);
        }
      }
      const keys = [];
      const values = [];
      console.log(teacherMap2.keys());
      console.log(teacherMap2.values());
      let idx = 0;
      for (let i of teacherMap2.keys()) {
        keys[idx] = i;
        idx++;
      }
      idx = 0;
      let sum = 0;
      for (let i of teacherMap2.values()) {
        values[idx] = i;
        sum += values[idx];
        idx++;
      }
      const colors = [];
      for (let i = 0; i < values.length; i++) {
        colors.push(
          `rgb(${Math.random() * 250},${Math.random() * 50 + 120},${
            Math.random() * 250
          })`
        );
      }
      console.log(`values = ${10.53 + 31.58 + 26.32 + 31.58}`);
      let labels = keys.map(
        (item, idx) => `${item}(${((values[idx] / sum) * 100).toFixed(2)}%)`
      );
      this.datacollection = {
        labels: [...labels],

        datasets: [
          {
            data: [...values],
            borderWidth: 0.8,
            borderColor: ["#fff"],
            backgroundColor: [...colors],
          },
        ],
      }
   }
  
};
</script>

