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
  deletePost(id: number) {
    return this.http.delete(`http://jsonplaceholder.typicode.com/posts/${id}`).toPromise();
  }
  addPost(post: Post) {
    return this.http.post('http://jsonplaceholder.typicode.com/posts', post).toPromise();
  }
  updatePost(post: Post) {
    return this.http.put(`http://jsonplaceholder.typicode.com/posts/${post.id}`, post).toPromise();
  }
}
