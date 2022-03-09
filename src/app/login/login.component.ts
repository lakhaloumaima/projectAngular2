import { NgForm } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Produit } from '../produit';
import { ProduitServiceService  } from '../produit-service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  /* constructor(private http : HttpClient) {
    this.http.get(' http://localhost:8000/api/login').subscribe(data => console.log(data)) ;

  }
  */

  datatoken:any
  messageError:any
  constructor(private produitServiceService:ProduitServiceService,private route:Router) { }

  ngOnInit(): void {
  }


  login(f:any){
    let data=f.value
    this.produitServiceService.login(data).subscribe(data=>{
      //this.datatoken=data
      //this.produitServiceService.saveToken(this.datatoken.token)
      this.route.navigate(['/posts'])


    },(err:HttpErrorResponse)=>this.messageError=err.error.error)
  }
}