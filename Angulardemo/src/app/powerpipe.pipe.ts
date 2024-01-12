import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'powerpipe'
})
export class PowerpipePipe implements PipeTransform {

  transform(value: any, ...power: any): any {
    
    if(value=='')
    return value;
    else
    return value ** power
  }

}
