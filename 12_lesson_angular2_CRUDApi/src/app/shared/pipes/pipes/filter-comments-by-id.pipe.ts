import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filterCommentsById'
})
export class FilterCommentsByIdPipe implements PipeTransform {

  transform(items: any, args?: any): any {
    if (!items || !args) {
      return items;
    }
    return items.filter((item: any) => item.postId === args.id );
  }
}
