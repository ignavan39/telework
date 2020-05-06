<template>
  <div id="app">
    <div v-if="teacherMap">
      <Status1
        :keys="teacherMap.keys()"
        :values="teacherMap.values()"
        :label="'Наиболее часто используемые платформы в Омской области и Самаре'"
      ></Status1>
      <hr />

      <StatusSchool :schoolMap="schoolMap" :teachers="teachers"></StatusSchool>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Status1 from "../src/components/Status";
import StatusSchool from "../src/components/StatusOnSchool";
export default {
  name: "App",

  components: {
    Status1,
    StatusSchool
  },
  data: () => ({
    teachers: [],
    teacherMap: {},
    schoolMap: {},
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
      maintainAspectRatio: false
    }
  }),
  async mounted() {
    await axios
      .get("/api")
      .then(response => {
        console.log(response.data);
        this.teachers = response.data;
        this.teacherMap = new Map();
        this.schoolMap = new Set();
        for (let item of this.teachers) {
          this.schoolMap.add(item.school.trim());
          if (this.teacherMap.has(item.platform.trim())) {
            let counter = this.teacherMap.get(item.platform.trim());
            counter++;
            this.teacherMap.set(item.platform.trim(), counter);
          } else {
            this.teacherMap.set(item.platform.trim(), 1);
          }
        }
      })
      .catch(e => {
        console.error(e);
      });
  }
};
</script>

<style>
#app {
  width: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background: #fcad452d;
}
</style>
