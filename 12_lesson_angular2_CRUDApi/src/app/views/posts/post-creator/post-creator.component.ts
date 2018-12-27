import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { PostsService } from 'src/app/views/posts/services/posts.service';
import { ActivatedRoute } from '@angular/router';
import { HelperService } from 'src/app/shared/services/helper.service';

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
    this.postsService.add(this.form.getRawValue());
  }
}
