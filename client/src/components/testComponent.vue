<template>
  <article>
  {{teachers}}
  </article>
</template>

<script lang="ts">
import {appStore} from "@/store/modules/app";
import { defineComponent } from 'vue';
import {onMounted} from "@vue/composition-api";

//import store from '@/store';

export default defineComponent({
  name: "testComponent",
  data:()=>( {
    teachers: appStore.getTestArray
  }),
  setup(){
    onMounted(()=>{
       appStore.setTestArray();
    })
  }
})
</script>

<style scoped>

</style>