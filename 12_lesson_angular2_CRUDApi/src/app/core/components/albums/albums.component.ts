import { Component } from '@angular/core';
import { AlbumsService, Album } from '../../services/albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent {

  private albumsPromise: Promise<Album[]> = this.albumsService.getAlbums();

  constructor(private albumsService: AlbumsService) { }

}
