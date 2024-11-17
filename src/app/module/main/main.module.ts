import { NgModule, OnInit } from '@angular/core'; // ! NgModule é um módulo do Angular.
import { BrowserModule } from '@angular/platform-browser'; //! BrowserModule é responsável por renderizar o conteúdo do Angular no navegador.
import { AppRoutingModule } from '../../routes/app-routing.module'; // ! AppRoutingModule é responsável por manter rotas na aplicação.

/// ? Importando os componentes que serão utilizados na aplicação.
import { MainComponent } from '../../components/main/main.component';
import { MainHeaderModule } from "../header/header.module";
import { MainFooterComponent } from 'src/app/components/footer/footer.component';
@NgModule({
  declarations: [
    // ! Aonde vamos listar todos os componentes da nossa aplicação. [ COMPONENTES | DIRETIVAS | PIPES | MODULES ]
    MainComponent,
    MainFooterComponent
  ],
  imports: [
    // ! Aonde vamos usar os módulos que serão utilizados na nossa aplicação. [ MODULES ]
    BrowserModule,
    AppRoutingModule,
    // * Importando o módulo do aplicação.
    MainHeaderModule
  ],
  providers: [
    //! Aonde vamos listar os componentes que são [ ENV | LOGIN | SERVICES | ROTAS | DADOS CONFIDENCIAIS ]
  ],
  bootstrap: [
    // ! O AppComponent é o componente principal da nossa aplicação. [ COMPONENTE PRINCIPAL ]
    MainComponent
  ]
})
export class MainModule implements OnInit {

  constructor() {
    localStorage.setItem('language', window.navigator.language);
  }
  ngOnInit(): void {
    console.log("Iniciando o módulo principal da aplicação!");
  }
}
