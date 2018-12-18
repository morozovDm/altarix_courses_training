import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  getTodos(): Promise<Todo[]> {
    return this.http.get<Todo[]>('http://jsonplaceholder.typicode.com/todos').toPromise();
  }
  getTodo(id: string): Promise<Todo> {
    return this.http.get<Todo>(`http://jsonplaceholder.typicode.com/todos/${id}`).toPromise();
  }
  createTodo(body: Todo) {
    return this.http.post<Todo[]>('http://jsonplaceholder.typicode.com/todos', body).toPromise();
  }
  updateTodo(body: Todo) {
    return this.http.put<Todo[]>(`http://jsonplaceholder.typicode.com/todos/${body.id}`, body).toPromise();
  }
  deleteTodo(body: Todo) {
    return this.http.delete<Todo[]>(`http://jsonplaceholder.typicode.com/todos/${body.id}`).toPromise();
  }
}
