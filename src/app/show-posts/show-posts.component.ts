import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Produit } from '../produit';
import { ProduitServiceService  } from '../produit-service.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-posts',
  templateUrl: './show-posts.component.html',
  styleUrls: ['./show-posts.component.css']
})
export class ShowPostsComponent implements OnInit {
  id=''
  dataObject:any
  messageErr=''

  constructor(private route:ActivatedRoute, private produitServiceService:ProduitServiceService ) {
    this.route.params.subscribe(params=>this.id=params['id'])

    this.produitServiceService.getOnestudent(this.id).subscribe(response=>this.dataObject=response,(err:HttpErrorResponse)=>{
        console.log(err)
      this.messageErr="We dont't found this student in our database"})
   }

  ngOnInit(): void {
  }
}
