import { Component, OnInit } from '@angular/core';
import { TodosService, Todo } from '../../services/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  private todosPromise: Promise<Todo[]>;

  constructor(private todosService: TodosService) { }

  ngOnInit() {
    this.todosPromise = this.todosService.getTodos();
  }

}
