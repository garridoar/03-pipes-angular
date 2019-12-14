import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, cond: boolean = true ): any {

    let str: string;
    if(cond) {
      str = '';
      for(let i = 0; i < value.length; i++) {
        str += '*';
      }
    }
    else {
      str = value;
    }

    return str;
  
  }

}
