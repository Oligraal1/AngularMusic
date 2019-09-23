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
  playAlbum: Album = null; // pour gérer l'affichage des caractères [play]
  message: string;
  isOpen = true;
  itemsPerPage: number = 5;
  postsPerPage: number[] = [5, 10, 15];
  isLoading: boolean;
  page: number;
  album: Album;

  constructor(private albumService: AlbumService) {
    // cont rôle de la méthode count
  }

  ngOnInit() {
    let count = this.albumService.countAlbum();
    this.albums = this.albumService.paginate(0, count);

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
    this.playAlbum = $event; // identifiant unique
    console.log('this is event : ' + $event)
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
  pageChanged(event) {
    this.page = event.page;
    console.log('***', this.page)
    this.itemsPerPage = event.itemsPerPage;
    console.log('---', this.itemsPerPage)
    this.loadAlbumsByPage(this.page, this.itemsPerPage);
  }
  loadAlbumsByPage(page: number, rows: number) {
    let params = new URLSearchParams();
    console.log(params)
    params.set('page', page.toString());
    params.set('rows', rows.toString());
    this.isLoading = true;
    //this.album = this.albumService.getAlbum(this.album.id);

  //   this.albums.subscribe(data => {
  //     this.albums = data;
  //     this.isLoading = false;
  //   }, error => {
  //     this.isLoading = false;
  //     console.log(error);
  //   });
   }
}
