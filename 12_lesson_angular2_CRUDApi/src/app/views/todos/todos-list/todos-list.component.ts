import { Component } from '@angular/core';
import { Todo, TodosService } from 'src/app/views/todos/services/todos.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent {

  todos: Observable<Todo[]> = this.todosService.getTodos();

  form = new FormGroup({
    title: new FormControl('', [Validators.required])
  });

  constructor(private todosService: TodosService, private usersService: UsersService, private router: Router) { }

  onSubmit() {
    this.todosService.createTodo(this.form.getRawValue()).pipe(tap(() => {
      this.router.navigate(['/todos']);
    })).subscribe();
  }
}
