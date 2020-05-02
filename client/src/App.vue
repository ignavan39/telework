<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Status></Status>
    <!--   <li v-for="item in teachers" :key="item.timeAns" v-bind="item">{{item.name}}</li>
    -->
    <li v-for='item in teachers' :key="item.name" v-bind="item">{{item.platform}}</li>
  </div>
</template>

<script>
import axios from "axios";
import Status from "../src/components/Status-1.vue";
export default {
  name: "App",

  components: {
    Status
  },
  data() {
    return {
      teachers: [],
      teacherMap: new Map(),
    };
  },
  mounted() {
    axios
      .get("http://localhost:3000")
      .then(response => {
        console.log(response.data);
        this.teachers = response.data;
      })
      .catch(e => {
        console.error(e);
      });

    for (let item in this.teachers) {
      if (this.teacherMap.has(item.platform)) {
        let counter = this.teacherMap.get(item.platform);
        counter++;
        this.teacherMap.set(item.platform, counter);
      } else {
        this.teacherMap.set(item.platform, 0);
      }
    }
  }
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
