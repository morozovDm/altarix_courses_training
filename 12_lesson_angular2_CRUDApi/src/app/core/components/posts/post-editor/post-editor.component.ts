import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post, PostsService } from 'src/app/core/services/posts.service';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { HelperService } from 'src/app/core/services/helper.service';

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

  constructor(private postsService: PostsService, private helperService: HelperService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.postsService.getPost(this.activatedRoute.snapshot.params.id)
      .pipe(tap((post: Post) => this.post = post)).subscribe();
  }

  onSubmit() {
    this.updatePost();
    this.postsService.updatePost(this.post).pipe(tap(() => {
      this.helperService.goBack();
    })).subscribe();

  }

  updatePost() {
    this.post.title = this.form.getRawValue().title;
    this.post.body = this.form.getRawValue().body;
  }
}
