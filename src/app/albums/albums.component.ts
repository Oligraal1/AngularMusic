import {
  Component,
  OnInit
} from '@angular/core';

import {
  Album
} from '../album';
import {
  ALBUMS
} from '../mock-albums';
import {
  AlbumService
} from '../album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  titlePage: string = 'I love my Albums';
  albums: Album[];
  selectedAlbum: Album;
  playAlbum: Album = null; // pour gérer l'affichage des caractères [play]
  message: string;


  constructor(private albumService: AlbumService) {
    // cont rôle de la méthode count
  }

  ngOnInit() {
    let count = this.albumService.countAlbum();
    this.albums = this.albumService.paginate(0, count);

  }

  onSelect(album: Album) {
    //console.log(album);
    this.selectedAlbum = album;
  }

  playParent($event) {
    this.playAlbum = $event; // identifiant unique
    console.log('this is event : ' + $event)
  }
  searchTitle($event) {
    if ($event) this.albums = $event;
  }
  messageParent($event) {
    if ($event) {
      this.message = $event;

    }
  }
}
