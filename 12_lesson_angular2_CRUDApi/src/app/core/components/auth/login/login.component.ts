import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  private isAuthorized: Promise<boolean> = this.authService.isAuthorized();
  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.login(this.form.getRawValue()).subscribe();
  }
}
