import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { PostsListComponent } from './components/posts/posts-list/posts-list.component';
import { PostDetailsComponent } from './components/posts/post-details/post-details.component';
import { PostCreatorComponent } from './components/posts/post-creator/post-creator.component';
import { PostEditorComponent } from './components/posts/post-editor/post-editor.component';
import { AuthGuard } from './services/auth.guard';
import { AnonymousGuard } from './services/anonymous.guard';
import { TodosListComponent } from './components/todos/todos-list/todos-list.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { LogoutComponent } from './components/auth/logout/logout.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'posts'
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [AnonymousGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AnonymousGuard]
  },
  {
    path: 'logout',
    component: LogoutComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'posts',
    component: PostsListComponent
  },
  {
    path: 'posts/create',
    pathMatch: 'full',
    component: PostCreatorComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'posts/edit/:id',
    pathMatch: 'full',
    component: PostEditorComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'posts/:id',
    component: PostDetailsComponent
  },
  {
    path: 'albums',
    component: AlbumsComponent
  },
  {
    path: 'todos',
    component: TodosListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
