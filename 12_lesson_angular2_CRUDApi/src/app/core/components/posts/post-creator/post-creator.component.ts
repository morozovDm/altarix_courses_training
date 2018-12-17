import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { PostsService, Post } from 'src/app/core/services/posts.service';
import { Router, ActivatedRoute } from '@angular/router';

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

  constructor(private postsService: PostsService, private router: Router, private activatedRoute: ActivatedRoute) { }

  onSubmit() {
    this.postsService.addPost(this.form.getRawValue()).then(() => {
      return this.router.navigate(['/']);
    });
  }

}
