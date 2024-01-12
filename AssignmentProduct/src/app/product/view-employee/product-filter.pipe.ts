import { Pipe, PipeTransform } from '@angular/core';
import { Product_Pojo } from '../Product_Pojo';

@Pipe({
  name: 'productFilter',
  pure: false
})
export class ProductFilterPipe implements PipeTransform {

  transform(list: Product_Pojo[],category: any) {
    if(category=='all')
    return list;
    else
    return list.filter((list)=>list.category==category)
  }

}
