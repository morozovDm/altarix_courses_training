import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';

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
  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>('http://jsonplaceholder.typicode.com/albums').pipe(share());
  }
}
