import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) { }

  getComments(): Promise<Comment[]> {
    return this.http.get<Comment[]>('http://jsonplaceholder.typicode.com/comments').toPromise();
  }
}
