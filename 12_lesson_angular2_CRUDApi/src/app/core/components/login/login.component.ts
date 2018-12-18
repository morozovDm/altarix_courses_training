import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

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
  private authorizedUsername: Promise<string> = this.authService.getAuthorizedUsername();

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.login(this.form.getRawValue()).then((token: string) => {
      if (token) {
        this.router.navigate(['/']);
        this.isAuthorized = this.authService.isAuthorized();
      }
    });
  }

  onLogout() {
    this.authService.logout().then(() => {
      this.isAuthorized = this.authService.isAuthorized();
      this.router.navigate(['/']);
    });
  }
}
