import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHeaderComponent } from "../../components/header/header.component"
import { MainMenuComponent } from "../../components/header/menu/menu.component"
import { MainMobileComponent } from "../../components/header/menu/mobile/mobile.component"
@NgModule({
  declarations: [
    MainHeaderComponent,
    MainMenuComponent,
    MainMobileComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    // ? Exportando componentes que serão utilizados na outros módulos
    MainHeaderComponent
  ]
})
export class MainHeaderModule implements OnInit {
  HeaderAnimation(){
    console.log("Animação do Header");
  }
  ngOnInit(): void {
  }
}
