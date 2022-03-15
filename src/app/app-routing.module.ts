import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { CategoriesComponent } from './categories/categories.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ListFreelancersComponent } from './list-freelancers/list-freelancers.component';
import { ListProjectsComponent } from './list-projects/list-projects.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { ShowPostsComponent } from './show-posts/show-posts.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  { path : '', component : HomeComponent} ,
  { path : 'home' , component:HomeComponent } ,
  { path : 'sessions' , component:LoginComponent } ,
  { path : 'registrations' , component:RegisterComponent } ,
  { path : 'missions' , component:ListProjectsComponent  } ,
  { path : 'post/new' , component:AddProjectComponent  } ,
  { path : 'freelancers' , component:ListFreelancersComponent } ,
  { path : 'posts/:id' , component:ShowPostsComponent  } ,
  { path : 'users' , component:UsersComponent  } ,
  { path : 'users/:id' , component:ProfileComponent  } ,

  { path : 'categories' , component:CategoriesComponent  } ,
  { path : 'category/new' , component:AddCategoryComponent  } ,
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
