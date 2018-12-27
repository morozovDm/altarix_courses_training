import { Component } from '@angular/core';
import { AlbumsService, Album } from '../services/albums.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent {

  albums: Observable<Album[]> = this.albumsService.getAlbums();
  constructor(private albumsService: AlbumsService) { }

}
