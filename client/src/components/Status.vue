<template>
  <div class="small" v-if="datacollection">
    <line-chart :chartData="datacollection" :options="options"></line-chart>
  </div>
</template>

<script>
import LineChart from "./LineChart.js";

export default {
  components: {
    LineChart
  },
  props: ["keys" ,"label", "values"],
  data() {
    return {
      datacollection: null,
      color:[
        'rgb(25, 152, 161)',
         'rgb(190, 255, 115)',
         'red', 'rgb(148, 42, 0)','rgb(0, 85, 196)','rgb(0, 190, 196)','rgb(255, 224, 139)',
         'rgb(24, 67, 255)','rgb(21, 104, 0)', '#fcac45', '#f87979',
      ],
      options: {
      responsive: true,
      maintainAspectRatio: false
      }
    };
  },
  mounted() {
    this.fillData();
  },
  methods: {
    fillData: function() {
      const keys1 = [];
      const values1 = [];
      let size = 0;
      let idx = 0;
      for (let i of this.keys) {
        keys1[idx] = i;
        idx++;
      }
      idx = 0;
      for (let i of this.values) {
          size +=i;
          values1[idx] = i;
          idx++;
      }
       let arr = [];
       for(let i=0;i<values1.length;i++){
          arr[i]= {
              label: `${i+1}:${keys1[i]}(${((values1[i]/size)*100).toFixed(2) }%)`,
              backgroundColor: this.color[i],
              data :[values1[i]]
            }
       }
       this.datacollection = {
          labels: [`${this.label} (${size} человек)`],
          datasets: arr    
        }
    //    console.log(this.datacollection);
      //  console.log()
    }
  }
};
</script>

<style>
.small {
  max-width: 600px;
  margin: 50px auto;
   width: 100%;
}
@media screen and(max-width: 800px) {
 .small{
   max-width: 600px;
    min-width: 400px;
    margin:auto;
 }
}
</style>