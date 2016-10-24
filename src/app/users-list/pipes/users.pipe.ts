import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usersPipe'
})
export class UsersPipe implements PipeTransform {
  transform(value: any, args: string): any {
    if(args === "" || args === undefined) {
      return value;
    }
    return value.filter((item) => item.name.toLowerCase().startsWith(args.toLowerCase()));
  }
}
