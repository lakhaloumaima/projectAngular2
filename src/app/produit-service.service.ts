import { Injectable } from '@angular/core';
import { Produit } from './produit';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };

@Injectable({
  providedIn: 'root'
})
export class ProduitServiceService {
  apiURL: string = 'http://localhost:3000/categories';

  token:any=localStorage.getItem('token')
  headerAdmin=new HttpHeaders()
  .set('authorization',this.token)
  .set('role','Admin')

  headerall=new HttpHeaders()
  .set('authorization',this.token)

 // produit : Produit;

  constructor(private http : HttpClient) {

  /*  this.produits = [
      {idProduit : 1, nomProduit:"PC Asus", prixProduit : 3000.600, dateCreation : new Date("01/14/2011")},
      {idProduit : 2, nomProduit : "Imprimante Epson", prixProduit : 450, dateCreation : new Date("12/17/2010")},
      {idProduit : 3, nomProduit :"Tablette Samsung", prixProduit : 900.123, dateCreation : new Date("02/20/2020")}
    ];*/
   }

   
   addstudent(profile:any){

    return this.http.post(environment.urlBackend+'addproject/',profile) ;

  }
  
  getAllstudents(){
    return this.http.get(`${environment.urlBackend}`+'posts/')
  }

  deletestudent(id:any){
    return this.http.delete(environment.urlBackend+'deleteproject/' +id )

  }

  updateStudent(id:string,newprofile:any){

    return this.http.patch(environment.urlBackend+'student/'+id,newprofile )

  }

   listeProduit(): Observable<Produit[]>{
    return this.http.get<Produit[]>(this.apiURL);
    }

   
   ajouterProduit( prod: Produit):Observable<Produit>{
    return this.http.post<Produit>(this.apiURL, prod, httpOptions);
    }

   
    supprimerProduit(id : number) {
      const url = `${this.apiURL}/${id}`;
      return this.http.delete(url, httpOptions);
      }

    
     consulterProdui(id: number): Observable<Produit> {
        const url = `${this.apiURL}/${id}`;
        return this.http.get<Produit>(url);
        }


updateProduit(prod :Produit) : Observable<Produit>
{
return this.http.put<Produit>(this.apiURL, prod, httpOptions);
}



  
}