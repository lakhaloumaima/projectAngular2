import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../category';
import { ProduitServiceService  } from '../produit-service.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  newProduit = new Category();

  messageErr="" ;

  submitted : boolean = false ;
  constructor(private produitServiceService : ProduitServiceService, private router :Router) { 

  }

  ngOnInit(): void {

  }
  add(f:any){
    let data=f.value
    console.log(data)
    
    this.produitServiceService.addcategory(data).subscribe( ()=>{
        console.log(data)
        this.submitted = true ;
      //this.router.navigate(['/posts'])

    },(err:HttpErrorResponse)=>{
      this.messageErr=err.error
      console.log(err.error)
       console.log(err.status)
       
    }) ;
  }
  /*
  addProduit(){
    this.produitServiceService.ajouterProduit(this.newProduit).subscribe(prod => {
    console.log(prod);
  
    });

    this.router.navigate(['projects']).then(() => {
      window.location.reload();
      });

}
*/

}
