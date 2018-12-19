import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { share, tap } from 'rxjs/operators';

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

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('http://jsonplaceholder.typicode.com/posts').pipe(share());
  }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(`http://jsonplaceholder.typicode.com/posts/${id}`).pipe(share());
  }

  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(`http://jsonplaceholder.typicode.com/posts/${post.id}`, post).pipe(share());
  }

  updatePost(post: Post): Observable<Post> {
    return this.http.put<Post>(`http://jsonplaceholder.typicode.com/posts/${post.id}`, post).pipe(share());
  }

  deletePost(id: number): Observable<Post> {
    return this.http.delete<Post>(`http://jsonplaceholder.typicode.com/posts/${id}`).pipe(share());
  }
}
