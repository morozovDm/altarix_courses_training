import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Post {
  id: number;
  userId: number;
  body: string;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private http: HttpClient) {}

  getPosts(): Promise<Post[]> {
    return this.http.get<Post[]>('http://jsonplaceholder.typicode.com/posts').toPromise();
  }

  getPost(id: number): Promise<Post> {
    return this.http.get<Post>(`http://jsonplaceholder.typicode.com/posts/${id}`).toPromise();
  }
}
