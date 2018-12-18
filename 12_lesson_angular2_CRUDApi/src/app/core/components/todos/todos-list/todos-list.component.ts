import { Component} from '@angular/core';
import { Todo, TodosService } from 'src/app/core/services/todos.service';
import { User, UsersService } from 'src/app/core/services/users.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent  {

  private todosPromise: Promise<Todo[]> = this.todosService.getTodos();
  private usersPromise: Promise<User[]> = this.usersService.getUsers();

  private form = new FormGroup({
    title: new FormControl('', [Validators.required])
  });

  constructor(private todosService: TodosService, private usersService: UsersService, private router: Router) { }
  onSubmit() {
    this.todosService.createTodo(this.form.getRawValue()).then(() => this.router.navigate(['/todos']));
  }
}
