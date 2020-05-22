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
        <Status :optionSet="getAreaSet" :teachers="dumpTeachers" :choice="'area'"></Status>
      
        <Status :optionSet="getSchoolSet" :teachers="dumpTeachers" :choice="'school'"></Status>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../src/components/Footer";
import Intro from "../src/components/Intro";
import Status from "../src/components/Status";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "App",

  components: {
    Status,
    Footer,
    Intro
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


