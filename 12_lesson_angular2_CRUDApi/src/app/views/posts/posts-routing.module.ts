import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostCreatorComponent } from './post-creator/post-creator.component';
import { PostEditorComponent } from './post-editor/post-editor.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { AuthGuard } from 'src/app/shared/services/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: PostsListComponent
  },
  {
    path: 'create',
    pathMatch: 'full',
    component: PostCreatorComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'edit/:id',
    pathMatch: 'full',
    component: PostEditorComponent,
    canActivate: [AuthGuard]
  },
  {
    path: ':id',
    component: PostDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
