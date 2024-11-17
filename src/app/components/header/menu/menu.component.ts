import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import HeaderLanguage  from '../../../json/header.json';
@Component({
  selector: 'MainMenu',
  templateUrl: '../../../view/header/menu/menu.view.html',
  styleUrls: ["../../../view/header/menu/scss/menu.view.scss"],
})
export class MainMenuComponent implements OnInit {
  @Output() MainHeaderAnimation = new EventEmitter<string>();
  @Output() MainHeaderMobile = new EventEmitter<string>();
  language: string | null = localStorage.getItem('language');
  headerHome : string = HeaderLanguage.pt.home;
  headerAbout : string = HeaderLanguage.pt.about;
  headerService: string = HeaderLanguage.pt.service;
  headerContact: string = HeaderLanguage.pt.contact;
  ngOnInit(): void {
    if(this.language== 'pt-BR'){
      this.headerHome = HeaderLanguage.pt.home;
      this.headerAbout = HeaderLanguage.pt.about;
      this.headerService= HeaderLanguage.pt.service;
      this.headerContact= HeaderLanguage.pt.contact;
    }else{
      this.headerHome = HeaderLanguage.en.home;
      this.headerAbout = HeaderLanguage.en.about;
      this.headerService= HeaderLanguage.en.service;
      this.headerContact= HeaderLanguage.en.contact;
    }
  }
  HeaderAnimation(){
    this.MainHeaderAnimation.emit();
  }
  MenuMobile(){
    const menu = document.querySelector(".MenuMobile") as HTMLElement;
    menu.classList.toggle("active");
    this.MainHeaderMobile.emit();
  }
}
