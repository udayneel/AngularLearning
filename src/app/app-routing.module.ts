import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WelcomevipComponent } from './welcomevip/welcomevip.component';
import { ListToDosComponent } from './list-to-dos/list-to-dos.component';

const routes: Routes = [
{ path:'' , component:LoginComponent},
{ path:'login' , component: LoginComponent},
{ path:'welcome' , component: WelcomeComponent},
{ path:'welcomevip' , component: WelcomevipComponent},
{ path:'todo' , component: ListToDosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
