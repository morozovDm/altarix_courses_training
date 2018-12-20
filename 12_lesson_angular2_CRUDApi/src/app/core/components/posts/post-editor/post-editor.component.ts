import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post, PostsService } from 'src/app/core/services/posts.service';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { HelperService } from 'src/app/core/services/helper.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-editor',
  templateUrl: './post-editor.component.html',
  styleUrls: ['./post-editor.component.scss']
})
export class PostEditorComponent {

  private post: Observable<Post> = this.postsService.getPost(this.activatedRoute.snapshot.params.id);
  form = new FormGroup({
    title: new FormControl('', [Validators.required]),
    body: new FormControl('', [Validators.required])
  });

  constructor(private postsService: PostsService, private helperService: HelperService, private activatedRoute: ActivatedRoute) {
  }

  onSubmit() {
    this.post.pipe(tap((post: Post) => {
      post.title = this.form.getRawValue().title;
      post.body = this.form.getRawValue().body;
    }), tap((post: Post) => {
      this.postsService.updatePost(post).pipe(tap(() => {
        this.helperService.goBack();
      }));
    }));
  }

}
