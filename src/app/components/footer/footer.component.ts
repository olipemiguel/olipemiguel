import { Component, OnInit } from '@angular/core';
import FooterLanguage  from '../../json/footer.json';
@Component({
  selector: 'MainFooter',
  templateUrl: '../../view/footer/footer.view.html',
  styleUrls: ['../../view/footer/scss/footer.view.scss']
})
export class MainFooterComponent implements OnInit {
  language: string | null = localStorage.getItem('language');
  footerHome : string = FooterLanguage.pt.home;
  footerAbout : string = FooterLanguage.pt.about;
  footerService: string = FooterLanguage.pt.service;
  footerContact: string = FooterLanguage.pt.contact;
  ngOnInit(): void {
    if(this.language== 'pt-BR'){
      this.footerHome = FooterLanguage.pt.home;
      this.footerAbout = FooterLanguage.pt.about;
      this.footerService= FooterLanguage.pt.service;
      this.footerContact= FooterLanguage.pt.contact;
    }else{
      this.footerHome = FooterLanguage.en.home;
      this.footerAbout = FooterLanguage.en.about;
      this.footerService= FooterLanguage.en.service;
      this.footerContact= FooterLanguage.en.contact;
    }
  }
}
