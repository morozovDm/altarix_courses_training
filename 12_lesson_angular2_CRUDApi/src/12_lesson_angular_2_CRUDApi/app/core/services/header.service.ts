import { Injectable } from '@angular/core';

export interface Menu {
  title: string;
  link: string;
}

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  menu: Menu[] = [
    {title: 'Posts', link: 'posts'},
    {title: 'Albums', link: 'albums'},
    {title: 'Todos', link: 'todos'}
  ];

  constructor() { }
}
