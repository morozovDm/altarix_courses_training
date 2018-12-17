import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  private isAuthorized: Promise<boolean>;
  private authorizedUsername: Promise<string>;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.isAuthorized = this.authService.isAuthorized();
    this.authorizedUsername = this.isAuthorized.then((authorized: boolean) => {
      if (authorized) {
        return localStorage.getItem('username');
      }
      return null;
    });
  }
  onSubmit() {
    this.authService.login(this.form.getRawValue()).then((token: string) => {
      if (token) {
        this.router.navigate(['/']);
        this.isAuthorized = this.authService.isAuthorized();
      }
    });
  }
  goToRegistration() {
    this.router.navigate(['/register']);
  }
  onLogout() {
    this.authService.logout().then(() => {
      this.isAuthorized = this.authService.isAuthorized();
      this.router.navigate(['/']);
    });
  }
}
