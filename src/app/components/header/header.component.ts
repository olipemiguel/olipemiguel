// ! Gerando um novo componente Manualmente.
import { Component } from "@angular/core";
@Component({
  selector: "MainHeader",
  templateUrl: "../../view//header/header.view.html",
  styleUrls: ["../../view//header/scss/header.view.scss"]
})
export class MainHeaderComponent{
  AnimationBorderHeader(){
    const borderHeader : HTMLElement = document.querySelector(".content-header") as HTMLElement;
    borderHeader.setAttribute("class","content-header content-header-animation flex")
    console.log("Animação inicializada!")
    setTimeout(() => {
      borderHeader.setAttribute("class","content-header flex")
      console.log("Animação finalizada!")
    }, 2000)
  }
  HeaderMobile(){
    const menu = document.querySelector(".mobile") as HTMLElement;
    const body = document.querySelector("body") as HTMLElement;
    menu.classList.toggle("active");
    if(menu.className.indexOf("active") > -1){
      body.style.overflowY = "hidden";
    }else{
      body.style.overflowY = "scroll";
    }
  }
}
