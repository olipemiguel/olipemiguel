import { Component, OnInit } from '@angular/core';
import HeaderLanguage  from '../../../../json/header.json';
@Component({
  selector: 'MainMobile',
  templateUrl: '../../../../view/header/menu/mobile/mobile.view.html',
  styleUrls: ['../../../../view/header/menu/mobile/scss/mobile.view.scss']
})
export class MainMobileComponent  implements OnInit {
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
}
