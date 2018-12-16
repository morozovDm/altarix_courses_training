import { Component, OnInit } from '@angular/core';
import { AlbumsService, Album } from '../../services/albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  private albumsPromise: Promise<Album[]>;

  constructor(private albumsService: AlbumsService) { }

  ngOnInit() {
    this.albumsPromise = this.albumsService.getAlbums();
  }

}
