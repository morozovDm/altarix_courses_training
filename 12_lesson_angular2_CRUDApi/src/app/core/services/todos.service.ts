import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>('http://jsonplaceholder.typicode.com/todos').pipe(share());
  }

  getTodo(id: string): Observable<Todo> {
    return this.http.get<Todo>(`http://jsonplaceholder.typicode.com/todos/${id}`).pipe(share());
  }

  createTodo(body: Todo): Observable<Todo> {
    return this.http.post<Todo>('http://jsonplaceholder.typicode.com/todos', body).pipe(share());
  }
 
  updateTodo(body: Todo): Observable<Todo> {
    return this.http.put<Todo>(`http://jsonplaceholder.typicode.com/todos/${body.id}`, body).pipe(share());
  }

  deleteTodo(body: Todo): Observable<Todo> {
    return this.http.delete<Todo>(`http://jsonplaceholder.typicode.com/todos/${body.id}`).pipe(share());
  }
}
