import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosListComponent } from './todos-list/todos-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations: [TodoComponent, TodosListComponent],
  imports: [
    CommonModule,
    TodosRoutingModule,
    ReactiveFormsModule,
  ]
})
export class TodosModule { }
