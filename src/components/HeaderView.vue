<template>
    <div class="HeaderLayout">
        <div class="HeaderBox">
            <h3 class="HeaderTitle">F</h3><span class="HeaderTitleSpan">eliphe</span>
        </div>
        <div class="HeaderMenu">
            <nav class="HeaderNav">
                <router-link class="HeaderMenuNav" to="/">HOME</router-link> 
                <router-link class="HeaderMenuNav" to="/about">ABOUT</router-link>
                <router-link class="HeaderMenuNav" to="/contact">CONTACT</router-link>
                <router-link class="HeaderMenuNav" to="/wallet">WALLET</router-link>
            </nav>
            <i class="fa-sharp fa-regular fa-bars HeaderMenuMobile" @click="NavMenu"></i>
        </div>
    </div>
</template>
<script>
import "@/assets/css/header.css";
export default {
    name: "HeaderView",
    methods: {
        NavMenu() {
            const navMenu = document.querySelector(".HeaderNav");
            navMenu.classList.toggle("active");
            console.log(navMenu)
        }
    }
}
</script>