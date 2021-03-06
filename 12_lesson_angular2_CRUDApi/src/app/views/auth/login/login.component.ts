import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, pluck } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { partitionByErrorCode } from 'src/app/shared/services/helper.service';

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

  error$: Observable<any>;

  private isAuthorized: Promise<boolean> = this.authService.isAuthorized();
  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    const [hasError$, noError$] = partitionByErrorCode(
      this.authService.login(this.form.getRawValue())
      .pipe(catchError((error) => of(error)))
    );
    this.error$ = hasError$.pipe(pluck('error'));
  }
}
