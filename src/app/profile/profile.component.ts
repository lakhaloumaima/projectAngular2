import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from '../user';
import { ProduitServiceService  } from '../produit-service.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  id=''
  dataObject:any
  messageErr=''

  constructor(private route:ActivatedRoute, private produitServiceService:ProduitServiceService ) {
    this.route.params.subscribe(params=>this.id=params['id'])

    this.produitServiceService.getOneuser(this.id).subscribe(response=>this.dataObject=response,(err:HttpErrorResponse)=>{
        console.log(err)
      this.messageErr="We dont't found this user in our database"})
   }

  ngOnInit(): void {
  }
}
