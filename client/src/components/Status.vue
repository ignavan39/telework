<template>
  <div class="small">
    <line-chart :chart-data="datacollection"></line-chart>
  </div>
</template>

<script>
import LineChart from "./LineChart.js";

export default {
  components: {
    LineChart
  },
  props: ["keys", "values"],
  data() {
    return {
      datacollection: null
    };
  },
  mounted() {
    this.fillData();
  },
  methods: {
    fillData() {
      const keys1 = [];
      const values1 = [];
      let idx = 0;
      for (let i of this.keys) {
        keys1[idx] = i;
        idx++;
      }
      idx = 0;
      for (let i of this.values) {
        values1[idx] = i;
        idx++;
      }
    
       
       this.datacollection = {
          labels: ['Platforms'],
          datasets: [
            {
              label: `1:${keys1[0]}(${values1[0]})`,
              backgroundColor: '#f87979',
              data:[values1[0]]
            }, {
              label:`2:${keys1[1]}(${values1[1]})`,
              backgroundColor: '#fcac45',
              data:[values1[1]]
            },
            {
              label: `3:${keys1[2]}(${values1[2]})`,
              backgroundColor: 'rgb(21, 104, 0)',
              data:[values1[2]]
            },
            {
              label: `4:${keys1[3]}(${values1[4]})`,
              backgroundColor: 'rgb(24, 67, 255)',
              data:[values1[3]]
            },
            {
              label: `5:${keys1[4]}(${values1[4]})`,
              backgroundColor: 'rgb(255, 224, 139)',
              data:[values1[4]]
            },
            {
              label: `6:${keys1[5]}(${values1[5]})`,
              backgroundColor: 'rgb(0, 190, 196)',
              data:[values1[5]]
            },
            {
              label: `7:${keys1[6]}(${values1[6]})`,
              backgroundColor: 'rgb(0, 85, 196)',
              data:[values1[6]]
            },
            {
              label: `8:${keys1[7]}(${values1[7]})`,
              backgroundColor: 'rgb(148, 42, 0)',
              data:[values1[7]]
            }
            ,
            {
              label: `9:${keys1[8]}(${values1[8]})`,
              backgroundColor: 'red',
              data:[values1[8]]
            }
            ,
            {
              label:`10:${keys1[9]}(${values1[9]})`,
              backgroundColor: 'rgb(190, 255, 115)',
              data:[values1[9]]
            }
            ,
            {
              label:`11:${keys1[10]}(${values1[10]})`,
              backgroundColor: 'rgb(25, 152, 161)',
              data:[values1[10]]
            }
          ]
        }
    }
  }
};
</script>

<style>
.small {
  max-width: 600px;
  margin: 50px auto;
}
</style>