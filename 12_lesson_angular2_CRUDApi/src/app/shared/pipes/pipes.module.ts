import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterByPipe } from './pipes/filter-by.pipe';
import { FilterUsersByIdPipe } from './pipes/filter-users-by-id.pipe';
import { FilterCommentsByIdPipe } from './pipes/filter-comments-by-id.pipe';

@NgModule({
  declarations: [FilterByPipe, FilterCommentsByIdPipe, FilterUsersByIdPipe],
  imports: [
    CommonModule
  ],
  exports: [
    FilterByPipe,
    FilterCommentsByIdPipe,
    FilterUsersByIdPipe
  ]
})
export class PipesModule { }
