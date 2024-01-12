import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from './employee';

@Pipe({
  name: 'deptfilter',
  pure: false
})
export class DeptfilterPipe implements PipeTransform {

  transform(list: Employee[],dept: any) {
    if(dept=='all')
    return list;
    else
    return list.filter((list)=>list.dept==dept)
  }

}
