import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ArticlesComponent} from "./articles/articles.component";
import {SpecialistsComponent} from "./specialists/specialists.component";
import {AboutComponent} from "./about/about.component";
import {ContactsComponent} from "./contacts/contacts.component";
import {LoginComponent} from "./login/login.component";
import {AppointmentComponent} from "./appointment/appointment.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'articles', component: ArticlesComponent},
  {path: 'specialists', component: SpecialistsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'appointment', component: AppointmentComponent},
  {path: '**', redirectTo: "", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
