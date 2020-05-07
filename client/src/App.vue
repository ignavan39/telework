<template>
  <div id="app">
    <div v-if="teachers">
      <StatusSchool :optionSet="areaSet" :teachers="teachers" :choice="'area'"></StatusSchool>
      <hr />

      <StatusSchool :optionSet="schoolSet" :teachers="teachers" :choice="'school'"></StatusSchool>
      <!--  <TimeOnJob :teachers="teachers"></TimeOnJob>-->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import StatusSchool from "../src/components/StatusOnSchool";
//import TimeOnJob from "../src/components/TimeForJob";
export default {
  name: "App",

  components: {
    // TimeOnJob,
    StatusSchool
  },
  data: () => ({
    teachers: [],
    schoolSet: {},
    areaSet: {}
  }),
  async mounted() {
    await axios
      .get("/api")
      .then(response => {
        console.log(response.data);
        this.teachers = response.data;
        this.areaSet = new Set();
        this.schoolSet = new Set();
        for (let item of this.teachers) {
          this.schoolSet.add(item.school.trim());
          this.areaSet.add(item.Area.trim());
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
}
</style>
