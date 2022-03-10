
import { SearchfilterPipe } from '../searchfilter.pipe';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from '../user';
import { ProduitServiceService  } from '../produit-service.service';
import { Router } from '@angular/router';
import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  dataArray:any = []
  p:number = 1 ;
  dataStudent={
    id : '',
    email:'',
  
  }
  messageErr =''
  posts :User[] = [] ;
  messageSuccess = '' ;
  email: string ="" ;
  searchedKeyword!:string;

  constructor(private produitServiceService:ProduitServiceService,private route:Router) {
    
  }
  ngOnInit(): void {
    this.produitServiceService.getAllusers().subscribe(data=>{
      console.log(data)
      this.dataArray=data , (err:HttpErrorResponse)=>{
        console.log(err)
      this.messageErr="We dont't found this user in our database"} 
      //console.log(this.dataArray)
    }) 
  }
  /*
  search() {
    if(this.title == "") 
      this.ngOnInit() ;
    else {
      this.posts = this.posts.filter(res =>{
        return this.title.toLocaleLowerCase().match(this.title.toLocaleLowerCase())
      }) 
    } 
  }
  */

  key = 'id' ;
  reverse: boolean = false ;

  sort(key: string) {
    this.key = key ;
    this.reverse = !this.reverse ;
  }
  details(id:any){
    this.route.navigate(['/users/'+id])
  }


  delete(id:any  , i :number){

    this.produitServiceService.deleteuser(id).subscribe(response=>{
      console.log(response)
      this.dataArray.splice(i,1)

    })
    
  }
  
    getdata(email:string, id:any){
      this.messageSuccess=''
      this.dataStudent.id = id 
      this.dataStudent.email = email
     
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
  
 

}