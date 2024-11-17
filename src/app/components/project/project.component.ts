import { Component } from '@angular/core';
import AboutLanguage  from '../../json/project.json';
@Component({
  selector: 'MainProject',
  templateUrl: '../../view/project/project.view.html',
  styleUrls: ['../../view/project/scss/project.view.scss']
})
export class MainProjectComponent {
  language: string | null = localStorage.getItem('language');
  waitAlert : string = AboutLanguage.pt.waitAlert;
  ngOnInit(): void {
    if(this.language== 'pt-BR'){
      this.waitAlert = AboutLanguage.pt.waitAlert;
    }else{
      this.waitAlert = AboutLanguage.en.waitAlert;
    }
  }
}
