<template>
  <div id="app">
    <div v-if="!loader">
      <div class="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>

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
    areaSet: {},
    loader: false
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

        this.loader = true;
      })
      .catch(e => {
        console.error(e);
      });
  }
};
</script>

<style>
.lds-roller {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-roller div {
  animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  transform-origin: 40px 40px;
}
.lds-roller div:after {
  content: " ";
  display: block;
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: rgb(2, 70, 82);
  margin: -4px 0 0 -4px;
}
.lds-roller div:nth-child(1) {
  animation-delay: -0.036s;
}
.lds-roller div:nth-child(1):after {
  top: 63px;
  left: 63px;
}
.lds-roller div:nth-child(2) {
  animation-delay: -0.072s;
}
.lds-roller div:nth-child(2):after {
  top: 68px;
  left: 56px;
}
.lds-roller div:nth-child(3) {
  animation-delay: -0.108s;
}
.lds-roller div:nth-child(3):after {
  top: 71px;
  left: 48px;
}
.lds-roller div:nth-child(4) {
  animation-delay: -0.144s;
}
.lds-roller div:nth-child(4):after {
  top: 72px;
  left: 40px;
}
.lds-roller div:nth-child(5) {
  animation-delay: -0.18s;
}
.lds-roller div:nth-child(5):after {
  top: 71px;
  left: 32px;
}
.lds-roller div:nth-child(6) {
  animation-delay: -0.216s;
}
.lds-roller div:nth-child(6):after {
  top: 68px;
  left: 24px;
}
.lds-roller div:nth-child(7) {
  animation-delay: -0.252s;
}
.lds-roller div:nth-child(7):after {
  top: 63px;
  left: 17px;
}
.lds-roller div:nth-child(8) {
  animation-delay: -0.288s;
}
.lds-roller div:nth-child(8):after {
  top: 56px;
  left: 12px;
}
@keyframes lds-roller {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
#app {
  width: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.header {
  background-color: rgb(0, 17, 63);
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "Raleway", sans-serif;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.title {
  font-size: 65px;
  color: #fcac45;
  text-align: center;
  box-shadow: 3px 2px 110px rgb(0, 0, 0);
  letter-spacing: 3px;
}
.sub__title {
  font-size: 20px;
  color: #fff;
  text-align: center;
  letter-spacing: 2px;
  margin-top: 15px;
}

/* Media header */

@media (max-width: 1200px) {
  .header {
    height: 200px;
  }
  .title {
    font-size: 40px;
  }
  .sub__title {
    font-size: 15px;
  }
}
@media (max-width: 461px) {
  .header {
    height: 150px;
  }
  .title {
    font-size: 20px;
  }
  .sub__title {
    font-size: 10px;
  }
}
</style>
