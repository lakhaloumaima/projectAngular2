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
import { FormsModule , ReactiveFormsModule}   from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShowPostsComponent } from './show-posts/show-posts.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { SearchfilterPipe } from './searchfilter.pipe';
import { UsersComponent } from './users/users.component';
import { ProfileComponent } from './profile/profile.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoriesComponent } from './categories/categories.component';
import { AddCategoryComponent } from './add-category/add-category.component';

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
    SearchfilterPipe,
    UsersComponent,
    ProfileComponent,
    CategoriesComponent,
    AddCategoryComponent,

  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    HttpClientModule ,
    FormsModule ,
    FontAwesomeModule ,
    Ng2SearchPipeModule ,
    NgxPaginationModule ,
    Ng2OrderModule ,
    ReactiveFormsModule ,
    BrowserAnimationsModule ,
    ToastrModule.forRoot() 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
