import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import { CoreRoutingModule } from './core-routing.module';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { AlbumsComponent } from './components/albums/albums.component';
import { PostsListComponent } from './components/posts/posts-list/posts-list.component';
import { PostDetailsComponent } from './components/posts/post-details/post-details.component';
import { FilterCommentsByIdPipe } from './pipes/filter-comments-by-id.pipe';
import { FilterUsersByIdPipe } from './pipes/filter-users-by-id.pipe';
import { PostCreatorComponent } from './components/posts/post-creator/post-creator.component';
import { PostEditorComponent } from './components/posts/post-editor/post-editor.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { TodoComponent } from './components/todos/todo/todo.component';
import { TodosListComponent } from './components/todos/todos-list/todos-list.component';

@NgModule({
  declarations: [
    HeaderComponent,
    AlbumsComponent,
    PostsListComponent,
    PostDetailsComponent,
    FilterCommentsByIdPipe,
    FilterUsersByIdPipe,
    PostCreatorComponent,
    PostEditorComponent,
    RegisterComponent,
    LoginComponent,
    TodoComponent,
    TodosListComponent
  ],
  imports: [CommonModule, CoreRoutingModule, HttpClientModule, ReactiveFormsModule],
  exports: [RouterModule, HeaderComponent]
})
export class CoreModule {}
