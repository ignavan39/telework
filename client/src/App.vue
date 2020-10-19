<template>
  <img alt="Vue logo" src="./assets/logo.png">
</template>

<script lang="ts">
/*
@Options({
  components: {
  },
})
*/
import {defineComponent} from "@vue/composition-api";

export default defineComponent({
  name: 'App',
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
