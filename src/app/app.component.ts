import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ProduitServiceService  } from './produit-service.service';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projectAngular2';
  faCoffee = faCoffee;

  messageError:any

  username:any
  constructor(private produitServiceService:ProduitServiceService,private route:Router) {
  
      // this.username=this.produitServiceService.getUsername()
     
   }


  logout(){
    this.produitServiceService.logout().subscribe(data=>{
      //this.datatoken=data
      //this.produitServiceService.saveToken(this.datatoken.token)
      
      this.route.navigate(['/sessions'])


    } ,(err:HttpErrorResponse)=>this.messageError=err.error.error) 


  }
}
