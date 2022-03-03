import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ListProjectsComponent } from './list-projects/list-projects.component';
import { ListFreelancersComponent } from './list-freelancers/list-freelancers.component';
import { HttpClientModule } from '@angular/common/http';
import { AddProjectComponent } from './add-project/add-project.component';
import { FormsModule }   from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShowPostsComponent } from './show-posts/show-posts.component';
import { UpdatePostsComponent } from './update-posts/update-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ListProjectsComponent,
    ListFreelancersComponent,
    AddProjectComponent,
    ShowPostsComponent,
    UpdatePostsComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    HttpClientModule ,
    FormsModule ,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
