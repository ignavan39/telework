<template>
  <div id="app">
    <div v-if="teacherMap">
      <Status1
        :keys="teacherMap.keys()"
        :values="teacherMap.values()"
        :label="'Наиболее часто используемые платформы в Омской области и Самаре'"
      ></Status1>
      <hr />

      <StatusSchool :optionSet="schoolSet" :teachers="teachers" :choice="'school'"></StatusSchool>
      <StatusSchool :optionSet="areaSet" :teachers="teachers" :choice="'area'"></StatusSchool>
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
    schoolSet: {},
    areaSet: {}
  }),
  async mounted() {
    await axios
      .get("/api")
      .then(response => {
        console.log(response.data);
        this.teachers = response.data;
        this.teacherMap = new Map();
        this.areaSet = new Set();
        this.schoolSet = new Set();
        for (let item of this.teachers) {
          this.schoolSet.add(item.school.trim());
          this.areaSet.add(item.Area.trim());
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
}
</style>
