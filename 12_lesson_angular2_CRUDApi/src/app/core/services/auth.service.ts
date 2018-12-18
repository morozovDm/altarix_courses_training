import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient) { }

  register(body: UserCredentials) {
    return this.http.post('https://todolistapi--dmitriimorozov2.repl.co/auth/register', body)
      .toPromise()
      .then(({ token }: ServerResponse) => {
        localStorage.setItem('id_token', token);
        return token;
      });
  }

  login(body: UserCredentials) {
    return this.http.post('https://todolistapi--dmitriimorozov2.repl.co/auth/login', body)
    .toPromise()
    .then(({token, username}: ServerResponse) => {
      localStorage.setItem('id_token', token);
      localStorage.setItem('username', username);
      return token;
    });
  }

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('username');
    return this.http.get('https://todolistapi--dmitriimorozov2.repl.co/auth/logout').toPromise();
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
