import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { PostsService } from 'src/app/core/services/posts.service';
import { ActivatedRoute } from '@angular/router';
import { HelperService } from 'src/app/core/services/helper.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-post-creator',
  templateUrl: './post-creator.component.html',
  styleUrls: ['./post-creator.component.scss']
})
export class PostCreatorComponent {

  form = new FormGroup({
    title: new FormControl('', [Validators.required]),
    body: new FormControl('', [Validators.required])
  });

  constructor(private postsService: PostsService, private helperService: HelperService, private activatedRoute: ActivatedRoute) { }

  onSubmit() {
    this.postsService.addPost(this.form.getRawValue()).pipe(tap(() => {
      this.helperService.goBack();
    })).subscribe();
  }
}
