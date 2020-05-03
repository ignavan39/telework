<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Status></Status>

    <li v-for="(item,i) in teacherMap.values()" :key="item*(i+1)" >{{item}} </li>
    <hr />
    <li v-for="(item,i) in teacherMap.keys()" :key="i+1">{{item}}</li>
    <hr />
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
  created() {},
  data() {
    return {
      teachers: [],
      teacherMap: {}
    };
  },
  mounted() {
    axios
      .get("http://localhost:3000")
      .then(response => {
         console.log(response.data);
        this.teachers = response.data;
        this.teacherMap = new Map();
        for (let item of this.teachers) {
         // console.log("asdasdasdasasdasasdasdadsasdasdasd");
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
