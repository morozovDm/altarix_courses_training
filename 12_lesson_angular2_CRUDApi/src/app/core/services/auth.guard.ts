import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { map, tap, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate$ = this.authService.authStatus$.pipe(map(authStatus => authStatus === true));
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      this.canActivate$.pipe(
        filter((canActivate) => canActivate === false),
        tap(() => this.router.navigate(['/posts']))
      ).subscribe();
      return this.canActivate$;
  }
}
