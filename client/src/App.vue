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
import { mapGetters, mapActions } from "vuex";
export default {
  name: "App",

  components: {
    Chart,
    Footer,
    Intro,
    Pie
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


