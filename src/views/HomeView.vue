<template>
  <div class="AppMainTemplate">
    <div class="HomeLeft">
      <div class="HomeLeftBoxTop">
        <h3 class="HomeLeftBoxTopText">> I am Felipe Miguel</h3>
        <p class="HomeLeftBoxTopSubText">Web Developer &amp; Graphic Designer</p>
      </div>
      <div class="HomeLeftBoxMain">
        <div class="HomeLeftBox">
          <i class="fa-solid fa-envelope HomeLeftIcon"></i>
          <a href="mailto:olipemiguel@tuta.io" class="HomeLeftMail">olipemiguel@tuta.io</a>
        </div>
        <div class="HomeLeftBox">
          <i class="fa-regular fa-mobile HomeLeftIcon"></i>
          <a href="tel:+445848454848" class="HomeLeftTell">+44 58484-54848</a>
        </div>
        <div class="HomeLeftBox">
          <i class="fa-light fa-location-dot HomeLeftIcon"></i>
          <p  class="HomeLeftAddress">019 Campinas, São Paulo</p>
        </div>
      </div>
      <div class="HomeBottomBox">
        <a href="https://github.com/olipemiguel"><i class="fa-brands fa-github-alt HomeLeftIcon"></i></a>
        <a href="https://www.linkedin.com/in/olipemiguel/"><i class="fa-brands fa-linkedin-in HomeLeftIcon"></i></a>
        <a href="https://x.com/olipemiguel"> <i class="fa-brands fa-twitter HomeLeftIcon"></i></a>
        <a href="https://www.instagram.com/olipemiguel/"><i class="fa-brands fa-instagram HomeLeftIcon"></i></a>
        <a href="https://discord.gg/TjaCyxGAwd"><i class="fa-brands fa-discord HomeLeftIcon"></i></a>
      </div>
    </div>
    <div class="HomeRight">
      <img class="HomeRightLogo" src="./../../public/img/photo.jpg">
    </div>
  </div>
</template>
<script>
import "@/assets/css/home.css";
export default {
  name: "AppMainTemplate",
}
</script>