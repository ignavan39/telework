<template>
  <div id="app">
    <intro />
  
  
    <div v-if="!getLoader">
      <div class="progress">
        <div class="indeterminate"></div>
      </div>
    </div>
    <div class="container">
      <div v-if="dumpTeachers">
        <Pie :optionSet="getAreaSet" :teachers="dumpTeachers" :optionName="'район'"></Pie>
      
        <Chart :optionSet="getSchoolSet" :teachers="dumpTeachers" :choice="'school'" :optionName="'школу'"></Chart>
        <Readiness :optionSet="getSchoolSet" :teachers="dumpTeachers" :optionName="'школу'"></Readiness>
       
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../src/components/Footer";
import Intro from "../src/components/Intro";
import Chart from "../src/components/Chart";
import Pie from "../src/components/Pie";
import Readiness from '../src/components/Readiness'
//import TimeOnTelephone from '../src/components/TimeOnTelephone'
import { mapGetters, mapActions } from "vuex";
export default {
  name: "App",

  components: {
    Chart,
    Footer,
    Intro,
    Pie,
    Readiness,
   // TimeOnTelephone
  },
  methods: mapActions(["fetchTeachers"]),
  computed: mapGetters([
    "dumpTeachers",
    "getAreaSet",
    "getSchoolSet",
    "getLoader"
  ]),
  async mounted() {
    this.fetchTeachers();
  }
};
</script>
<style>
*{
  margin: 0;
  padding: 0;
}

</style>


