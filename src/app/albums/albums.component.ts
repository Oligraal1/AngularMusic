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
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations'

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({

        opacity: 1,
        transform: 'rotate(0deg)'
      })),
      state('closed', style({

        opacity: 0.5,
        transform: 'rotate(180deg)'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
})
export class AlbumsComponent implements OnInit {

  titlePage: string = 'I love my Albums';
  albums: Album[];
  selectedAlbum: Album;
  //playAlbum: Album = null; // pour gérer l'affichage des caractères [play]
  message: string;
  isOpen = true;
  pos : number;
  status: string = null; // pour gérer l'affichage des caractères [play]
  count;

  constructor(private albumService: AlbumService) {
    console.log(this.albumService.getAlbums().subscribe(albums => console.log(albums)))
  }

  ngOnInit() {

     this.albumService.paginate(0, 5).subscribe(albums=>this.albums = albums);
     this.count = this.albumService.countAlbum().subscribe(count=>this.count = count);
  }
  /**
   * Séletionne album pour afficher détails
   * @param album
   */
  onSelect(album: Album) {
    //console.log(album);
    this.selectedAlbum = album;
  }

  playParent($event) {
    this.status = $event.id; // identifiant unique
   
    this.albumService.switchOn($event);
  }
  /**
   * Permet de faire une recherche dans barre search sur titre album
   * @param $event
   */
  searchTitle($event) {
    if ($event) this.albums = $event;
  }
  messageParent($event) {
    if ($event) {
      this.message = $event;

    }
    /**
     * Permet de faire une animation sur bouton EN
     */
  }
  onClickEn() {
    this.toggle();
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  /**
   * Gère la pagination de la page
   * @param event
   */
  paginate($event) {
     this.albumService.paginate($event.start, $event.end).subscribe(albums=>this.albums = albums);
  }


}
