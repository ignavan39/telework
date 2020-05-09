<template>
  <div class="footer">
    <div class="logo">
      <div class="img_footer">
        <a href="https://vk.com/necrobutcher87">
          <img src="../assets/vk-logo-png-white-4.png" alt="vk.com" />
        </a>
        <a
          href="https://vk.com/away.php?to=https%3A%2F%2Finstagram.com%2Flugburz13%3Figshid%3D1u094tuieftne&cc_key="
        >
          <img src="../assets/inst.png" alt="instagram" />
        </a>
      </div>
    </div>
    <div class="footer_text">ivanignatenko28@gmail.com</div>
    
  </div>
</template>
<script>
export default {
  name: "Footer"
};
</script>
<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between; /* этот марджин убери,
     он для различия шапки и подвала сделан,ибо контента нет */
  background-color: rgb(1, 20, 75);
  width: 100%;
  height: 100px;
  font-family: "Raleway", sans-serif;
  align-items: center;
}
.footer_text {
  color: #fff;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-size: 15px;
  right: 10px;
  align-items: center;
}
.footer a {
  left: 20px;
  text-decoration: none;
}

.footer img {
  width: 45px;
  height: 45px;
}
.logo {
  /**   position: absolute;*/
  bottom: 40px;
  left: 50px;
  color: #fff;
  letter-spacing: 2px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  
}
/* Media header */

@media (max-width: 1200px) {
  .footer a {
    font-size: 6px;
  }
  .footer_text {
    font-size: 8px;
  }
  .footer {
    height: 60px;
  }
  .footer img {
    width: 20px;
    height: 20px;
  }
  .logo {
    bottom: 20px;
    left: 50px;
    font-size: 12px;
  }
}
@media (max-width: 461px) {
  .footer a {
    font-size: 6px;
  }
  .footer {
    height: 40px;
  }
  .footer img {
    width: 12px;
    height: 12px;
  }
  .logo {
    bottom: 16px;
    left: 25px;
    font-size: 8px;
  }
}
</style>