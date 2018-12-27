import { Injectable } from '@angular/core';

export interface Menu {
  title: string;
  link: string;
  authorized?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  titleMenu: Menu[] = [
    {title: 'Posts', link: 'posts'},
    {title: 'Albums', link: 'albums'},
    {title: 'Todos', link: 'todos'}
  ];
  authMenu: Menu[] = [
    {title: 'SignUp', link: 'auth/register', authorized: false},
    {title: 'LogIn', link: 'auth', authorized: false},
    {title: 'LogOut', link: 'auth/logout', authorized: true}
  ];

  constructor() { }
}
