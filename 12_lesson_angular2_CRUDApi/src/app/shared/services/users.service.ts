import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { share, catchError } from 'rxjs/operators';
import { partitionByErrorCode } from './helper.service';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address?: {
    street?: string;
    suite?: string;
    city?: string;
    zipcode?: string;
    geo?: {
      lat?: string;
      lng?: string;
    };
  };
}

export interface UsersPartition {
  hasError$: Observable<any>;
  noError$: Observable<User[]>;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers(): UsersPartition {
    const [hasError$, noError$] = partitionByErrorCode(
      this.http.get<User[]>(`http://jsonplaceholder.typicode.com/users`)
      .pipe(share(), catchError((error) => of(error)))
      );
      return {hasError$, noError$};
  }
}
