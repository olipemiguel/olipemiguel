<template>
  <div class="AppMainTemplate About">
    <div class="AboutMain">
      <div class="AboutMainRight AboutMainHeight">
        <h4 class="AboutMainTitle">About me</h4>
        <p class="AboutMainTextSub">Desenvolvedor Full-Stack com {{ experienceTime }} anos de experiência em desenvolvimento de aplicações web e software. Possuo habilidades sólidas em linguagens como JavaScript, Python e PHP, além de experiência com frameworks modernos como React, VueJs, Angular e Node.js. Tenho um forte entendimento de bancos de dados relacionais e não relacionais, como MySQL e MongoDB.</p>
        <p class="AboutMainTextSub">Sou apaixonado por criar soluções inovadoras e eficientes, sempre focando na experiência do usuário e na performance da aplicação. Trabalho bem em equipes ágeis, colaborando estreitamente com designers e outros desenvolvedores para entregar produtos de alta qualidade. Estou sempre em busca de aprender novas tecnologias e aprimorar minhas habilidades.</p>
        <div class="AboutMainRightBox">
          <div class="AboutMainRightBoxSkills">NODE JS</div>
          <div class="AboutMainRightBoxSkills">TYPE SCRIPT</div>
          <div class="AboutMainRightBoxSkills">ANGULAR</div>
          <div class="AboutMainRightBoxSkills">MYSQL</div>
          <div class="AboutMainRightBoxSkills">VUE JS</div>
          <div class="AboutMainRightBoxSkills">JAVA SCRIPT</div>
          <div class="AboutMainRightBoxSkills">REACT</div>
          <div class="AboutMainRightBoxSkills">SCSS</div>
          <div class="AboutMainRightBoxSkills">GIT</div>
          <div class="AboutMainRightBoxSkills">HTML</div>
          <div class="AboutMainRightBoxSkills">CSS</div>
          <div class="AboutMainRightBoxSkills">REST API</div>
        </div>
      </div>
      <div class="AboutMainLeft AboutMainHeight">
        <h4 class="AboutMainTitle">Details</h4>
        <div class="AboutMainLeftBox">
          <div class="AboutMainLeftBoxSub">
            <h3 class="AboutMainLeftBoxTitle">Nome:</h3>
            <h3 class="AboutMainLeftBoxSubTitle">Felipe Miguel</h3>
          </div>
          <div class="AboutMainLeftBoxSub">
            <h3 class="AboutMainLeftBoxTitle">Idade:</h3>
            <h3 class="AboutMainLeftBoxSubTitle">{{ age }} Anos</h3>
          </div>
          <div class="AboutMainLeftBoxSub">
            <h3 class="AboutMainLeftBoxTitle">Idiomas:</h3>
            <h3 class="AboutMainLeftBoxSubTitle">Portuguese &amp; English</h3>
          </div>
          <div class="AboutMainLeftBoxSub">
            <h3 class="AboutMainLeftBoxTitle">Location:</h3>
            <h3 class="AboutMainLeftBoxSubTitle">019 Campinas, São Paulo</h3>
          </div>
          <div class="AboutMainLeftBoxCV">
            <a class="AboutMainLeftBoxDownload" href="../../public/pdf/Curriculum-Feliphe-Dev.pdf" download><i class="fa-solid fa-cloud-arrow-down"></i> Download CV</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "@/assets/css/about.css"
export default {
    name: 'AboutView',
  data() {
    return {
      experienceTime: 6,
      age: 20
    }
  }
}
</script>