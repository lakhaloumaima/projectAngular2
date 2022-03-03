import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Produit } from '../produit';
import { ProduitServiceService  } from '../produit-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-projects',
  templateUrl: './list-projects.component.html',
  styleUrls: ['./list-projects.component.css']
})
export class ListProjectsComponent implements OnInit {
 
  dataArray:any = []
 
  dataStudent={
    id : '',
    title:'',
    description:''
   /* averagePayment:0 ,
    period:0,
    start_date:'',
    end_date:'',
    */
  }
  messageErr =''

  messageSuccess = '' 
  constructor(private produitServiceService:ProduitServiceService,private route:Router) {
    
  }
  ngOnInit(): void {
    this.produitServiceService.getAllstudents().subscribe(data=>{
      console.log(data)
      this.dataArray=data , (err:HttpErrorResponse)=>{
        console.log(err)
      this.messageErr="We dont't found this student in our database"} 
      //console.log(this.dataArray)
    }) 
  }

  details(id:any){
    this.route.navigate(['/posts/'+id])
  }


  delete(id:any  , i :number){

    this.produitServiceService.deletestudent(id).subscribe(response=>{
      console.log(response)
      this.dataArray.splice(i,1)

    })
    
  }
  
    getdata(title:string,description:string,id:any){
      this.messageSuccess=''
      this.dataStudent.title=title
      this.dataStudent.description=description
      this.dataStudent.id=id
      console.log(this.dataStudent)
  
    }
    updatenewstudent(f:any){
      let data=f.value
      this.produitServiceService.updateStudent(this.dataStudent.id,data).subscribe(response=>
        {
        console.log(response)
          let indexId=this.dataArray.findIndex((obj:any)=>obj.id==this.dataStudent.id)
  
          this.dataArray[indexId].title=data.title
          this.dataArray[indexId].description=data.description
  
          this.messageSuccess=`this title : ${this.dataArray[indexId].title} is updated`
  
        },(err:HttpErrorResponse)=>{
          console.log(err.message)
        
        })
    }
  

/*
  constructor(private http : HttpClient) {
    this.http.get('http://localhost:8000/api/products').subscribe(data => console.log(data)) ;


  }

  ngOnInit(): void {
    this.produitServiceService.listeProduit().subscribe((prods: any) => {
    console.log(prods);
    this.produits = prods;
    });
  }
*/

}

/*
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-allstudents',
  templateUrl: './allstudents.component.html',
  styleUrls: ['./allstudents.component.css']
})
export class AllstudentsComponent implements OnInit {

  dataArray:any=[]
 
  dataStudent={
    firstname:'',
    lastname:'',
    email:'',
    age:0,
    phone:0,
    id:'',
  }

  messageSuccess=''
  constructor(private ds:DataService,private route:Router) {
   
    this.ds.getAllstudents().subscribe(data=>{
      console.log(data)
      this.dataArray=data
    })
    
   }

  ngOnInit(): void {
  }


  delete(id:any,i:number){

    this.ds.deletestudent(id).subscribe(response=>{
      console.log(response)
       this.dataArray.splice(i,1)

    })

  }



  getdata(firstname:string,lastname:string,age:number,phone:number,email:string,id:any){
    this.messageSuccess=''
    this.dataStudent.firstname=firstname
    this.dataStudent.lastname=lastname
    this.dataStudent.age=age
    this.dataStudent.phone=phone
    this.dataStudent.email=email
    this.dataStudent.id=id
    console.log(this.dataStudent)

  }


  updatenewstudent(f:any){
    let data=f.value
    this.ds.updateStudent(this.dataStudent.id,data).subscribe(response=>
      {
      console.log(response)
        let indexId=this.dataArray.findIndex((obj:any)=>obj._id==this.dataStudent.id)

        this.dataArray[indexId].firstname=data.firstname
        this.dataArray[indexId].lastname=data.lastname
        this.dataArray[indexId].age=data.age
        this.dataArray[indexId].phone=data.phone
        this.dataArray[indexId].email=data.email


        this.messageSuccess=`this student ${this.dataArray[indexId].firstname} is updated`


      },(err:HttpErrorResponse)=>{
        console.log(err.message)
      
      })
  }


  details(id:any){
    this.route.navigate(['/admin/studentdetails/'+id])
  }



  

}


*/
