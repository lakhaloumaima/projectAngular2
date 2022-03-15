import { Pipe, PipeTransform } from '@angular/core';
import { Category } from './category';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(name: string, categories: Category[]): Category[] {
    if (!categories || !name ) {
      return categories ;
    }

    return categories.filter(category =>{
      return Category.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
    }) 
  }

}
