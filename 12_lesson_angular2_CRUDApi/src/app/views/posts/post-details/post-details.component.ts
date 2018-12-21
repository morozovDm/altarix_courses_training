import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService, Post } from 'src/app/views/posts/services/posts.service';
import { CommentsService, Comment } from 'src/app/views/posts/services/comments.service';
import { Observable } from 'rxjs';
import { User, UsersService } from 'src/app/shared/services/users.service';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  commentsPromise: Promise<Comment[]> = this.commentsService.getComments();
  private usersPromise: Promise<User[]>;
  post$: Observable<Post>;
  error$: Observable<any>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private postsService: PostsService,
    private commentsService: CommentsService,
    private usersService: UsersService
  ) {}
  ngOnInit() {
    [this.error$, this.post$] = this.postsService.get<Post>(this.activatedRoute.snapshot.params.id);
    this.post$.subscribe();
    this.error$.pipe(pluck('error')).subscribe();
  }
}
