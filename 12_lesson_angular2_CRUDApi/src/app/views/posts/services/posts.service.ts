import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularCrudService } from 'projects/angular-crud-lib/src/public_api';

export interface Post {
  id: number;
  userId: number;
  body: string;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class PostsService extends AngularCrudService {

  endPoint = 'posts';
  constructor( http: HttpClient) {
    super(http);
  }
}
