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
}
