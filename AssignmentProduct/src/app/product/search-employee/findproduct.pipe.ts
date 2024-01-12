import { Pipe, PipeTransform } from '@angular/core';
import { Product_Pojo } from '../Product_Pojo';

@Pipe({
  name: 'findproduct',
  pure: false
})
export class FindproductPipe implements PipeTransform {

  transform(list: Product_Pojo, find: any){
    
  }

}
