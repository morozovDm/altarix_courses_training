import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Album {
  userId: number;
  id: number;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  constructor(private http: HttpClient) {}
  getAlbums() {
    return this.http
      .get<Album[]>('http://jsonplaceholder.typicode.com/albums')
      .toPromise();
  }
}
