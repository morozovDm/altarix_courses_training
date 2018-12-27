import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { share, tap } from 'rxjs/operators';
interface UserCredentials {
  email?: string;
  username: string;
  password: string;
}

interface ServerResponse {
  auth: boolean;
  token: string;
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authStatusSubject = new BehaviorSubject(!!localStorage.getItem('id_token'));
  authStatus$ = this.authStatusSubject.asObservable();

  constructor(private http: HttpClient) { }

  register(body: UserCredentials) {
    const login$ = this.http.post('https://todolistapi--dmitriimorozov2.repl.co/auth/register', body).pipe(
      share());
    login$.pipe(
      tap(({ token }: ServerResponse) => localStorage.setItem('id_token', token)),
      tap(({ username }: ServerResponse) => localStorage.setItem('username', username)),
      tap(() => this.authStatusSubject.next(true))
    );
    return login$;
  }

  login(body: any) {
    const login$ = this.http.post<ServerResponse>('https://todolistapi--dmitriimorozov2.repl.co/auth/login', body).pipe(
      share());
    login$.pipe(
      tap(({ token }) => localStorage.setItem('id_token', token)),
      tap(({ username }) => localStorage.setItem('username', username)),
      tap(() => this.authStatusSubject.next(true))
    ).subscribe();
    return login$;
  }

  logout() {
    const http$ = this.http.get('https://todolistapi--dmitriimorozov2.repl.co/auth/logout').pipe(share());
    http$.pipe(
      tap(() => localStorage.removeItem('id_token')),
      tap(() => localStorage.removeItem('username')),
      tap(() => this.authStatusSubject.next(false))
    ).subscribe();
    return http$;
  }

  getAuthorizedUsername(): Promise<string> {
    return this.isAuthorized().then((authorized: boolean) => {
      if (authorized) {
        return Promise.resolve(localStorage.getItem('username'));
      }
    });
  }

  isAuthorized() {
    return Promise.resolve(localStorage.getItem('id_token')).then((token: string) => token !== null);
  }

}
