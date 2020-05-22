<template>
  <header class="header">
    <div class="container">
    <h2 class="title">Статистические данные</h2>
    <p
      class="sub__title"
    >Информация о том ,какими платформами пользуются учителя на дистанционном обучении , вся информация основана на ваших ответах в гугл форме (спасибо за участие!)</p>
 </div>
  </header>
</template>
<script>
export default {
  name: "Intro"
};
</script>
<style scoped>
header {
  background-color: #0d47a1;
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
  letter-spacing: 3px;
}
.sub__title {
  font-size: 30px;
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