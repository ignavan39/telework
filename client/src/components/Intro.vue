<template>
  <div class="wrapper blue darken-4 page-footer">
    <div class="container">
      <h2 class="title">Статистические данные</h2>
      <p
        class="white-text sub__title"
      >Информация о том ,какими платформами пользуются учителя на дистанционном обучении , вся информация основана на ваших ответах в гугл форме (спасибо за участие!)</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Intro"
};
</script>
<style scoped>
.wrapper {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
@keyframes slideTitleButtom {
  from {
    opacity: 0;
  }

  to {
    opacity: 10;
  }
}
@keyframes slideTitleLeft {
  from {
    margin-right: 100%;
    width: 500%;
  }

  to {
    margin-right: 0%;
    width: 100%;
  }
}
.title {
  animation-duration: 2s;
  animation-name: slideTitleLeft;
  font-size: 70px;
  color: #fcac45;
  text-align: center;
  letter-spacing: 3px;
}
.sub__title {
  animation-duration: 6s;
  animation-name: slideTitleButtom;
  margin-top: 10rem;
  font-size: 20px;
  color: #fff;
  text-align: center;
  margin-top: 15px;
}

/* Media header */

@media (max-width: 1200px) {
  .wrapper {
    height: 50vh;
  }
  .title {
    font-size: 80px;
  }
  .sub__title {
    font-size: 18px;
  }
}
@media (max-width: 461px) {
  .wrapper {
    height: 75vh;
  }
  .title {
    font-size: 30px;
  }
  .sub__title {
    font-size: 15px;
  }
}
</style>