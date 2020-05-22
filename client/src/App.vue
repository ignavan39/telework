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
        <StatusSchool :optionSet="getAreaSet" :teachers="dumpTeachers" :choice="'area'"></StatusSchool>
        <hr />

        <StatusSchool :optionSet="getSchoolSet" :teachers="dumpTeachers" :choice="'school'"></StatusSchool>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../src/components/Footer";
import Intro from "../src/components/Intro";
import StatusSchool from "../src/components/StatusOnSchool";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "App",

  components: {
    StatusSchool,
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


