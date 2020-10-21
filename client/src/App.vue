<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <test-component></test-component>
</template>

<script lang="ts">
/*
@Options({
  components: {
  },
})
*/
import {defineComponent} from "@vue/composition-api";
import testComponent from "@/components/testComponent.vue";

export default defineComponent({
  name: 'App',
  components: {
    testComponent
  }
})
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
