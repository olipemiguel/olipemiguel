import { Component, OnInit } from '@angular/core';
import AboutLanguage from '../../json/about.json';
@Component({
  selector: 'app-about',
  templateUrl: '../../view/about/about.view.html',
  styleUrls: ['../../view/about/scss/about.view.scss']
})
export class MainAboutComponent implements OnInit {
  language: string | null = localStorage.getItem('language');
  aboutTitle : string = AboutLanguage.pt.about.title;
  aboutMe : Array<string> = AboutLanguage.pt.about.description;
  aboutSkills : Array<string> = AboutLanguage.pt.about.skill;
  detailsTitle : string = AboutLanguage.pt.details.title;
  detailsMe : any = AboutLanguage.pt.details.aboutMe
  ngOnInit(): void {
    if(this.language== 'pt-BR'){
      this.aboutTitle  = AboutLanguage.pt.about.title;
      this.aboutMe  = AboutLanguage.pt.about.description;
      this.aboutSkills = AboutLanguage.pt.about.skill;
      this.detailsTitle = AboutLanguage.pt.details.title;
      this.detailsMe = AboutLanguage.pt.details.aboutMe
    }else{
      this.aboutTitle  = AboutLanguage.en.about.title;
      this.aboutMe  = AboutLanguage.en.about.description;
      this.aboutSkills = AboutLanguage.en.about.skill;
      this.detailsTitle = AboutLanguage.en.details.title;
      this.detailsMe = AboutLanguage.en.details.aboutMe
    }
  }
}
