import { Component, OnInit } from '@angular/core';
import { Post, PostsService } from 'src/app/views/posts/services/posts.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap, pluck } from 'rxjs/operators';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})

export class PostsListComponent implements OnInit {

  posts$: Observable<Post[]>;
  error$: Observable<any>;
  constructor(private postsService: PostsService, private usersService: UsersService, private router: Router) { }

  ngOnInit() {
    [this.error$, this.posts$] = this.postsService.getAll<Post[]>();
    this.posts$.subscribe();
    this.error$.pipe(pluck('error')).subscribe();
  }

  goToPostDetail(_id: number) {
    this.router.navigate(['posts', _id]);
  }
  editPostDetail(_id: number) {
    this.router.navigate(['posts/edit', _id]);
  }
  deletePost(id: number) {
    this.error$ = this.postsService.delete<Post[]>(id);
    this.error$.pipe(pluck('error')).subscribe();
  }
}
