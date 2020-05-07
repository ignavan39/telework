<template>
  <div>
    <div v-if="datacollection" class="small">
      <pie :options="options" :chartData="datacollection"></pie>
    </div>
  </div>
</template>


<script>
import Pie from "../components/PieChart.js";
export default {
  name: "TimeOnJob",
  data() {
    return {
      datacollection: null,
      color: [
        "rgb(25, 152, 161)",
        "rgb(190, 255, 115)",
        "red",
        "rgb(148, 42, 0)",
        "rgb(0, 85, 196)",
        "rgb(0, 190, 196)",
        "rgb(255, 224, 139)",
        "rgb(24, 67, 255)",
        "rgb(21, 104, 0)",
        "#fcac45",
        "#f87979"
      ],
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    };
  },

  props: ["teachers"],
  components: {
    Pie
  },
  mounted() {
    this.fillData();
  },
  methods: {
    fillData: function() {
      let timeMap = new Map();
      for (let item of this.teachers) {
        if (timeMap.has(item.timeOnTelephone.trim())) {
          let counter = timeMap.get(item.timeOnTelephone.trim());
          counter++;
          timeMap.set(item.timeOnTelephone.trim(), counter);
        } else {
          timeMap.set(item.timeOnTelephone.trim(), 1);
        }
      }
      const keys1 = [];
      const values1 = [];
      let size = 0;
      let idx = 0;
      for (let i of timeMap.keys()) {
        keys1[idx] = i;
        idx++;
      }
      idx = 0;
      for (let i of timeMap.values()) {
        size += i;
        values1[idx] = i;
        idx++;
      }
      let arr = [];
      this.series = [];
      for (let i = 0; i < values1.length; i++) {
        this.series[i] = values1[i] / size;
        arr[i] = {
          label: `${i + 1}:${keys1[i]}(${((values1[i] / size) * 100).toFixed(
            2
          )}%)`,
          backgroundColor: this.color[i],
          data: [values1[i]]
        };
      }
      this.datacollection = {
        labels: [`(${size} человек)`],
        datasets: arr
      };
      console.log(this.datacollection);
    }
  }
};
</script>