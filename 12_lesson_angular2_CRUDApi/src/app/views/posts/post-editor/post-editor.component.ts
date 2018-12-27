import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post, PostsService } from 'src/app/views/posts/services/posts.service';
import { ActivatedRoute } from '@angular/router';
import { tap, pluck } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HelperService } from 'src/app/shared/services/helper.service';

@Component({
  selector: 'app-post-editor',
  templateUrl: './post-editor.component.html',
  styleUrls: ['./post-editor.component.scss']
})
export class PostEditorComponent implements OnInit {

  private post$: Observable<Post>;
  private error$: Observable<any>;
  form = new FormGroup({
    title: new FormControl('', [Validators.required]),
    body: new FormControl('', [Validators.required])
  });

  constructor(private postsService: PostsService, private helperService: HelperService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    [this.error$, this.post$] = this.postsService.get<Post>(this.activatedRoute.snapshot.params.id);
    this.post$.subscribe();
    this.error$.pipe(pluck('error')).subscribe();
  }

  onSubmit() {
    [this.error$, this.post$] = this.postsService.update<Post>(this.post$);
    this.post$.subscribe();
    this.error$.pipe(pluck('error')).subscribe();
  }
}
