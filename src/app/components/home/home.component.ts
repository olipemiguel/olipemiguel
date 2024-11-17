import { Component, OnInit } from '@angular/core';
import HomeLanguage  from '../../json/home.json';

@Component({
  selector: 'MainHome',
  templateUrl: '../../view/home/home.view.html',
  styleUrls: ['../../view/home/scss/home.view.scss']
})
export class MainHomeComponent  implements OnInit {
    language: string | null = localStorage.getItem('language');
    homeTitle : string = HomeLanguage.pt.homeTitle;
    homeSubTitle : string = HomeLanguage.pt.homeSubTitle;
    homeMail: string = HomeLanguage.pt.homeMail;
    homeTell: string = HomeLanguage.pt.homeTell;
    homeAddress: string = HomeLanguage.pt.homeAddress;
    ngOnInit(): void {
      if(this.language== 'pt-BR'){
        this.homeTitle  = HomeLanguage.pt.homeTitle;
        this.homeSubTitle  = HomeLanguage.pt.homeSubTitle;
        this.homeMail = HomeLanguage.pt.homeMail;
        this.homeTell = HomeLanguage.pt.homeTell;
        this.homeAddress = HomeLanguage.pt.homeAddress;
      }else{
        this.homeTitle  = HomeLanguage.en.homeTitle;
        this.homeSubTitle  = HomeLanguage.en.homeSubTitle;
        this.homeMail = HomeLanguage.en.homeMail;
        this.homeTell = HomeLanguage.en.homeTell;
        this.homeAddress = HomeLanguage.en.homeAddress;
      }
    }

}
