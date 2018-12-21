import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {

  transform(src: any[], key: string, value: any): any {
    return src.filter((it: any) => it[key] === value);
  }

}
