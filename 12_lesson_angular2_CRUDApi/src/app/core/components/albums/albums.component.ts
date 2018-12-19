import { Component, OnInit } from '@angular/core';
import { AlbumsService, Album } from '../../services/albums.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  private albums: Album[];
  constructor(private albumsService: AlbumsService) { }

  ngOnInit() {
    this.albumsService.getAlbums().pipe(tap((albums: Album[]) => {
      this.albums = albums;
    })).subscribe();
  }

}
