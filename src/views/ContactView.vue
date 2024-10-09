<template>
  <div class="AppMainTemplate Contact">
    <div class="ContactBox">
        <div class="ContactHeader">
          <h1 class="ContactHeaderTitle">Contact</h1>
        </div>
        <div class="ContactForm">
           <form class="ContactFormBox" action="" method="get">
                <div class="ContactFormTopBox">
                    <input type="text" placeholder="Nome:" required autocomplete="false">
                    <input type="text" placeholder="Sobre Nome:" required autocomplete="false">
                </div>
                <div class="ContactFormTopBox">
                    <input type="text" placeholder="E-mail:" required autocomplete="false">
                    <input type="text" placeholder="Telefone:" required autocomplete="false">
                </div>
                <div class="ContactFormTopBox">
                    <textarea id="ContactFormTopTextArea" name="w3review" rows="4" cols="50"></textarea> 
                </div>
                <div class="ContactFormTopBox">
                    <button type="submit" class="ContactFormSubmitButton FormButton">Enviar</button>
                    <button type="reset" class="ContactFormResetButton FormButton">Limpar</button>
                </div>
           </form>
        </div>
    </div>
  </div>
</template>
<script>
import "@/assets/css/contact.css";
export default {
    name: 'ContactView',
}
</script>