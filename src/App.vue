<template>
  <HeaderView id="AppHeader"/>
  <router-view id="AppMain"/>
  <FooterView id="AppFooter"/>
</template>
<script>
import HeaderView from "./components/HeaderView.vue";
import FooterView from "./components/FooterView.vue";
import "./assets/css/main.css";
export default {
  components: {
    HeaderView,
    FooterView
  }
}
</script>
<style>
#AppHeader{
  width: 100vw;
  height: 4.65rem;
}
#AppMain{
  width: 100vw;
  height: calc(100vh - 4.65rem - 1.95rem);
}
#AppFooter{
  width: 100vw;
  height: 1.95rem;
}
</style>