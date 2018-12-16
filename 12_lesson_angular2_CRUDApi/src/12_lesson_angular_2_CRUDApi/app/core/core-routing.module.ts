import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { TodosComponent } from './components/todos/todos.component';
import { PostsListComponent } from './components/posts/posts-list/posts-list.component';
import { PostDetailsComponent } from './components/posts/post-details/post-details.component';
import { PostCreatorComponent } from './components/post-creator/post-creator.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'posts'
  },
  {
    path: 'posts',
    component: PostsListComponent
  },
  {
    path: 'posts/:id',
    component: PostDetailsComponent
  },
  {
    path: 'posts/create',
    component: PostCreatorComponent
  },
  {
    path: 'albums',
    component: AlbumsComponent
  },
  {
    path: 'todos',
    component: TodosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
