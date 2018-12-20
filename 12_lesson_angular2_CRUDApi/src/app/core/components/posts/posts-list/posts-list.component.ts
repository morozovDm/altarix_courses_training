import { Component, OnInit } from '@angular/core';
import { Post, PostsService } from 'src/app/core/services/posts.service';
import { User, UsersService } from 'src/app/core/services/users.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap, pluck } from 'rxjs/operators';

@Component({
  selector: 'app-posts',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  private posts: Post[];
  private error$: Observable<any>;
  private usersPromise: Promise<User[]> = this.usersService.getUsers();

  constructor(private postsService: PostsService, private usersService: UsersService, private router: Router) { }

  ngOnInit() {
    const {hasError$, noError$} = this.postsService.getPosts();
    noError$.pipe(tap((posts: Post[]) => {
      this.posts = posts;
    })).subscribe();
    this.error$ = hasError$.pipe(pluck('error'));
    this.error$.subscribe();
  }

  goToPostDetail(_id: number) {
    this.router.navigate(['posts', _id]);
  }
  editPostDetail(_id: number) {
    this.router.navigate(['posts/edit', _id]);
  }
  deletePost(_id: number) {
    this.postsService.deletePost(_id).pipe(tap(() => {
      this.router.navigate(['/']);
    })).subscribe();
  }
}
