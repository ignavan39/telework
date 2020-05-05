<template>
  <div>
    <h3>Выберете школу</h3>
    <select v-model="filter">
      <option v-for="(item,i) of schoolMap" :key="i" value:item>{{item}}</option>
      
    </select>
    <div v-if="teacherMap2">
       <!-- <Helper :keys="keys" :values="values" :size="size"/>-->
       <Status1 :keys="teacherMap2.keys()" :values="teacherMap2.values()"></Status1>
      </div>
    
  </div>
</template>


<script>
import Status1 from "../components/Status";
export default {
  props: ["schoolMap", "teachers"],
  name: "StatusSchool",
  data() {
    return {
      filter: String,
      teacherMap2: null,
      values:[],
      keys:[],
      size:Number
    };
  },
  components: {
  //  Helper,
  Status1
  },
  mounted() {
    this.fillData();
  },
  watch: {
    filter(value) {
      this.teacherMap2 = new Map();
      for (let item of this.teachers) {
        if (item.school === value) {
          if (this.teacherMap2.has(item.platform)) {
            let counter = this.teacherMap2.get(item.platform);
            counter++;
            this.teacherMap2.set(item.platform, counter);
          } else {
            this.teacherMap2.set(item.platform, 1);
          }
        }
      }
      this.fillData();
      //  this.fillData(value);
      //console.log(this.teacherMap.values());
     // console.log(this.teacherMap.keys());
    }
  },
  methods: {
    fillData() {
      this.size = 0;
      let idx = 0;
      let KeyItr = this.teacherMap2.keys();
      for (let i of KeyItr) {
        this.keys[idx] = i;
        idx++;
      }
      idx = 0;
      let valueItr = this.teacherMap2.values();
      for (let i of valueItr) {
        this.size += i;
        this.values[idx] = i;
        idx++;
      }
    }
  }
};
</script>
<style scoped>
.small {
  max-width: 600px;
  margin: 50px auto;
}
</style>