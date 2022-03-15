
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { ProduitServiceService  } from '../produit-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  messageError:any
  constructor(private produitServiceService:ProduitServiceService,private router:Router) { }

  ngOnInit(): void {
  }

  register(f:any){
    let data=f.value

    this.produitServiceService.register(data).subscribe(data=>{
      this.router.navigate(['/sessions'])
      
      console.log(data)
    },(err:HttpErrorResponse)=>{
      console.log(err)
      this.messageError="hjbgvehjbhvbsdhbv"})

  }
}
