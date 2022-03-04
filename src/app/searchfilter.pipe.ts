import { Pipe, PipeTransform } from '@angular/core';
import { Produit } from './produit';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(title: string, produits: Produit[]): Produit[] {
    if (!produits || !title ) {
      return produits ;
    }

    return produits.filter(produit =>{
      return produit.title.toLocaleLowerCase().includes(title.toLocaleLowerCase())
    }) 
  }

}
