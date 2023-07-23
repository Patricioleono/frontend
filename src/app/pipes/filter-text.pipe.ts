import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterText'
})
export class FilterTextPipe implements PipeTransform {

  transform(value:any, arg: any):any {
    if( arg === ''){return value;}
    const resultSearch = [];
    for(const search of (value ?? [])){
      if(search?.title.toLowerCase().indexOf(arg?.toLowerCase()) > -1){
        resultSearch.push(search) 
      };
    };
    return resultSearch;
  }

}
