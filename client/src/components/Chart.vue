<template>
  <div class="section">
    <h4>Выберите {{optionName}}</h4>
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
export default {
  props: ["optionSet", "teachers", "choice" , "optionName"],
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
            if (item.state.trim() === value) {
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
      const keys = [];
      const values = [];
      let size = 0;
      let idx = 0;
      for (let i of teacherMap2.keys()) {
        keys[idx] = i;
        idx++;
      }
      idx = 0;
      for (let i of teacherMap2.values()) {
        size += i;
        values[idx] = i;
        idx++;
      }
      let arr = [];
       const colors = [];
      for(let i = 0; i < values.length;i++){
          colors.push(`rgb(${Math.random()*250},${Math.random()*50+120},${Math.random()*250})`)
          
      }
      for (let i = 0; i < values.length; i++) {
        arr[i] = {
          label: `${i + 1}:${keys[i]}(${((values[i] / size) * 100).toFixed(
            2
          )}%)`,
          backgroundColor: colors[i],
          data: [values[i]]
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