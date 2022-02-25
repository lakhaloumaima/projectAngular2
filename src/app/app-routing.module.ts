import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProjectComponent } from './add-project/add-project.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ListFreelancersComponent } from './list-freelancers/list-freelancers.component';
import { ListProjectsComponent } from './list-projects/list-projects.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path : '', component : HomeComponent} ,
  { path : 'home' , component:HomeComponent } ,
  { path : 'login' , component:LoginComponent } ,
  { path : 'register' , component:RegisterComponent } ,
  { path : 'projects' , component:ListProjectsComponent  } ,
  { path : 'addproject' , component:AddProjectComponent  } ,
  { path : 'freelancers' , component:ListFreelancersComponent } ,


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
