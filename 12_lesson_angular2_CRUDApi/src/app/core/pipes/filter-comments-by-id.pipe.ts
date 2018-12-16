import { Pipe, PipeTransform } from '@angular/core';
import { Comment } from '../services/comments.service';
@Pipe({
  name: 'filterCommentsById'
})
export class FilterCommentsByIdPipe implements PipeTransform {

  transform(items: any, args?: any): any {
    if (!items || !args) {
      return items;
    }
    return items.filter((item: Comment) => item.postId === args.id );
  }
}
