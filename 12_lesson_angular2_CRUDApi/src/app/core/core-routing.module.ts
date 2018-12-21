import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'posts'
  },
  {
    path: 'auth',
    loadChildren: 'src/app/views/auth/auth.module#AuthModule'
  },
  {
    path: 'posts',
    loadChildren: 'src/app/views/posts/posts.module#PostsModule'
  },
  {
    path: 'albums',
    loadChildren: 'src/app/views/albums/albums.module#AlbumsModule'
  },
  {
    path: 'todos',
    loadChildren: 'src/app/views/todos/todos.module#TodosModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
