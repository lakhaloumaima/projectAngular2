import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from '../produit';
import { ProduitServiceService  } from '../produit-service.service';


@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  newProduit = new Produit();

  messageErr="" ;

  constructor(private produitServiceService : ProduitServiceService, private router :Router) { 

  }

  ngOnInit(): void {

  }
  add(f:any){
    let data=f.value
    console.log(data)
    this.produitServiceService.addstudent(data).subscribe( ()=>{
        console.log(data)

      this.router.navigate(['/posts'])

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
/*
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  messageErr=""
  constructor(private ds:DataService,private route:Router) { }

  ngOnInit(): void {
  }

  add(f:any){
    let data=f.value
    // console.log(data)
    this.ds.addstudent(data).subscribe(response=>{
      // console.log(response)

      this.route.navigate(['/admin/allstudents'])

    },(err:HttpErrorResponse)=>{
      this.messageErr=err.error
      // console.log(err.error)
      // console.log(err.status)
    })
  }

}


*/
