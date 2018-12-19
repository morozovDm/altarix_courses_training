import { Component, OnInit} from '@angular/core';
import { Todo, TodosService } from 'src/app/core/services/todos.service';
import { User, UsersService } from 'src/app/core/services/users.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent implements OnInit  {

  // private todosPromise: Promise<Todo[]> = this.todosService.getTodos();
  // private usersPromise: Promise<User[]> = this.usersService.getUsers();

  private todos: Todo[];

  private form = new FormGroup({
    title: new FormControl('', [Validators.required])
  });

  constructor(private todosService: TodosService, private usersService: UsersService, private router: Router) { }

  ngOnInit() {
    this.todosService.getTodos().pipe(tap((todos: Todo[]) => {
      this.todos = todos;
    })).subscribe();
  }

  onSubmit() {
    this.todosService.createTodo(this.form.getRawValue()).pipe(tap(() => {
      this.router.navigate(['/todos']);
    })).subscribe();
  }
}
