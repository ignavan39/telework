<template>
  <div class="section">
    <h3 v-if="choice==='school'">Выберете школу</h3>
    <h3 v-else-if="choice==='area'">Выберете Район</h3>
    <select
      v-model="filter"
      class="btn dropdown-trigger blue darken-4 "
      data-target="dropdown2"
      id="dropdown2"
    >
      <option v-if="choice==='area'" value="Все">Всe</option>
      <option v-for="(item,i) of optionSet" :key="i" value:item >{{item}}</option>
    </select>
    <div v-if="datacollection">
      <bar-chart :chartData="datacollection" :options="options"></bar-chart>
    </div>

    <!--  </div>-->
  </div>
</template>


<script>
import BarChart from "./BarChart.js";
//import Status1 from "../components/Status";
export default {
  props: ["optionSet", "teachers", "choice"],
  name: "StatusSchool",
  data() {
    return {
      filter: "", //this.choice === 'area' ? 'all' : '',
      size: Number,
      root: "",
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
  updated() {
    if (this.choice === "area") {
      if (this.filter === "") {
        this.filter = "Все";
        this.fillData(this.filter);
      }
    } else if (this.choice === "school") {
      if (this.filter === "") {
        this.filter = "Шербакульский Лицей";
        this.fillData(this.filter);
      }
    }
  },
  components: {
    // Status1
    BarChart
  },
  watch: {
    filter(value) {
      if (value !== this.root) {
        console.log(this.filter);
        this.root = value;
        this.fillData(this.filter);
      }
    }
  },

  methods: {
    fillData: function(value) {
      let teacherMap2 = new Map();
      for (let item of this.teachers) {
        if (
          item.platform.trim() !== "Дневник.ру" &&
          item.platform.trim() !== "дневник.ру"
        ) {
          if (this.choice === "school") {
            if (item.school === value) {
              if (teacherMap2.has(item.platform.trim())) {
                let counter = teacherMap2.get(item.platform.trim());
                counter++;
                teacherMap2.set(item.platform.trim(), counter);
              } else {
                teacherMap2.set(item.platform.trim(), 1);
              }
            }
          } else if (this.choice === "area") {
            if (value === "Все") {
              if (teacherMap2.has(item.platform.trim())) {
                let counter = teacherMap2.get(item.platform.trim());
                counter++;
                teacherMap2.set(item.platform.trim(), counter);
              } else {
                teacherMap2.set(item.platform.trim(), 1);
              }
            }
            if (item.Area.trim() === value) {
              if (teacherMap2.has(item.platform.trim())) {
                let counter = teacherMap2.get(item.platform.trim());
                counter++;
                teacherMap2.set(item.platform.trim(), counter);
              } else {
                teacherMap2.set(item.platform.trim(), 1);
              }
            }
          }
        }
      }
      const keys1 = [];
      const values1 = [];
      let size = 0;
      let idx = 0;
      for (let i of teacherMap2.keys()) {
        keys1[idx] = i;
        idx++;
      }
      idx = 0;
      for (let i of teacherMap2.values()) {
        size += i;
        values1[idx] = i;
        idx++;
      }
      let arr = [];
      for (let i = 0; i < values1.length; i++) {
        arr[i] = {
          label: `${i + 1}:${keys1[i]}(${((values1[i] / size) * 100).toFixed(
            2
          )}%)`,
          backgroundColor: this.color[i],
          data: [values1[i]]
        };
      }
      this.datacollection = {
        labels: [`${value} (${size} человек)`],
        datasets: arr
      };
      // console.log(this.datacollection);
    }
  }
};
</script>