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
    {title: 'SignUp', link: 'register', authorized: false},
    {title: 'LogIn', link: 'login', authorized: false},
    {title: 'LogOut', link: 'logout', authorized: true}
  ];

  constructor() { }
}
