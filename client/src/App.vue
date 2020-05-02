<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
  </div>
</template>

<script>
import axios from 'axios';
export default {

  name: 'App',
  
  components: {
  },
  data(){
   return {
      teachers:[],
    }
  },
  mounted(){
    axios.get('http://localhost:3000').then(
      (response)=> {
        console.log(response.data);
        this.teachers = response.data;
      }
    ).catch((e)=>{
      console.error(e);
    });
  }
}
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
