import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { share, catchError, tap } from 'rxjs/operators';
import { partitionByErrorCode } from './helper.service';
interface ServerResponse {
  token: string;
  status: number;
}

export interface Post {
  id: number;
  userId: number;
  body: string;
  title: string;
}

export interface PostPartition {
  noError$: Observable<Post>;
  hasError$: Observable<any>;
}

export const createPostPartition = (hasError, noError) => ({
  hasError$: hasError,
  noError$: noError
});

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) {}
  getPosts() {
    const [hasError$, noError$] = partitionByErrorCode(
      this.http.get<ServerResponse>('http://jsonplaceholder.typicode.com/posts')
        .pipe(share(), catchError((error) => of(error)))
    );
    return createPostPartition(hasError$, noError$);
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
