<template>
  <div id="app">
    <Status1 :keys="teacherMap.keys()" :values="teacherMap.values()"></Status1>
    <hr />
   
   <StatusSchool :schoolMap="schoolMap" :teachers="teachers"></StatusSchool>
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
    schoolMap: {}
  }),
  mounted() {
    axios
      .get("http://localhost:3000")
      .then(response => {
        console.log(response.data);
        this.teachers = response.data;
        this.teacherMap = new Map();
        this.schoolMap = new Set();
        for (let item of this.teachers) {
          this.schoolMap.add(item.school);
          if (this.teacherMap.has(item.platform)) {
            let counter = this.teacherMap.get(item.platform);
            counter++;
            this.teacherMap.set(item.platform, counter);
          } else {
            this.teacherMap.set(item.platform, 1);
          }
        }
      })
      .catch(e => {
        console.error(e);
      });
  },
 
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
