import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../../services/users.service';

@Pipe({
  name: 'filterUsersById'
})
export class FilterUsersByIdPipe implements PipeTransform {

  transform(users: User[], args?: any): any {
    if (!users || !args) {
      return users;
    }
    return users.filter((user: User) => user.id === args.id);
  }

}
