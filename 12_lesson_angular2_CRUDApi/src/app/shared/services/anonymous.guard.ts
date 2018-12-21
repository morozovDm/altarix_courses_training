import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { map, filter, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AnonymousGuard implements CanActivate {
  canActivate$ = this.authService.authStatus$.pipe(map(authStatus => authStatus === false));
  constructor(private authService: AuthService, private router: Router) { }
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
