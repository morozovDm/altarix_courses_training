import { Component, OnInit } from '@angular/core';
import { Post, PostsService } from 'src/app/core/services/posts.service';
import { User, UsersService } from 'src/app/core/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  private postsPromise: Promise<Post[]>;
  private usersPromise: Promise<User[]>;

  constructor(private postsService: PostsService, private usersService: UsersService, private router: Router) { }

  ngOnInit() {
    this.postsPromise = this.postsService.getPosts();
    this.usersPromise = this.usersService.getUsers();
  }
  goToPostDetail(_id: number) {
    this.router.navigate(['posts', _id]);
  }
  editPostDetail(_id: number) {
    this.router.navigate(['posts/edit', _id]);
  }
  deletePost(_id: number) {
    this.postsService.deletePost(_id).then(() => this.postsPromise = this.postsService.getPosts());
  }
}
