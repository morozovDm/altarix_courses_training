import { Component, Input } from '@angular/core';
import { Todo, TodosService } from 'src/app/views/todos/services/todos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {

  @Input() todo: Todo;

  constructor(private todoService: TodosService, private router: Router) { }
  onStatusChanged() {
    this.todo.completed = !this.todo.completed;
    this.todoService.updateTodo(this.todo);
  }
  onDeleteTodo() {
    this.todoService.deleteTodo(this.todo);
  }
}
