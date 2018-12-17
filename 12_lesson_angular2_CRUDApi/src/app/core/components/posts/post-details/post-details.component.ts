import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService, Post } from 'src/app/core/services/posts.service';
import { CommentsService, Comment } from 'src/app/core/services/comments.service';
import { User, UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  private post: Post;
  private commentsPromise: Promise<Comment[]>;
  private usersPromise: Promise<User[]>;
  constructor(
    private activatedRoute: ActivatedRoute,
    private postsService: PostsService,
    private commentsService: CommentsService,
    private usersService: UsersService
  ) {}

  ngOnInit() {
    this.postsService
      .getPost(this.activatedRoute.snapshot.params.id)
      .then((post: Post) => {
        this.post = post;
      });
      this.commentsPromise = this.commentsService.getComments();
    }
}
