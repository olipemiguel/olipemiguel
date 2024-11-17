import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainHomeComponent } from '../components/home/home.component';
import { MainAboutComponent } from '../components/about/about.component';
import { MainProjectComponent } from '../components/project/project.component';
import { MainContactComponent } from '../components/contact/contact.component';
const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'  },
  {path: 'home', component: MainHomeComponent},
  {path: 'about', component: MainAboutComponent},
  {path: 'project', component: MainProjectComponent},
  {path: 'contact', component: MainContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
