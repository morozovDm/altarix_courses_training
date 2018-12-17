import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post, PostsService } from 'src/app/core/services/posts.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-editor',
  templateUrl: './post-editor.component.html',
  styleUrls: ['./post-editor.component.scss']
})
export class PostEditorComponent implements OnInit {

  private post: Post;

  form = new FormGroup({
    title: new FormControl('', [Validators.required]),
    body: new FormControl('', [Validators.required])
  });

  constructor(private postsService: PostsService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.postsService.getPost(this.activatedRoute.snapshot.params.id).then((post: Post) => {
      this.post = post;
      this.form.get('title').setValue(post.title);
      this.form.get('body').setValue(post.body);
    });
  }

  onSubmit() {
    this.updatePost();
    this.postsService.updatePost(this.post).then(() => {
      this.router.navigate(['/']);
    });
  }

  updatePost() {
    this.post.title = this.form.getRawValue().title;
    this.post.body = this.form.getRawValue().body;
  }
}
