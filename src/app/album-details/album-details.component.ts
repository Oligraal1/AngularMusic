import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Album, List } from '../album';
import { ALBUM_LISTS } from '../mock-albums';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss']
})
export class AlbumDetailsComponent implements OnInit {

  // Classe Input permet de récupérer les data de l'enfant
// album est liée à une entrée [album] du parent dans le sélecteur
  @Input() album: Album;
  @Output() onPlay: EventEmitter<Album> = new EventEmitter;
  albumLists: List[] ; // récupération de la liste des chansons
  songs: List;
  constructor(private albumService: AlbumService) { }

  ngOnInit() {
    console.log(this.album); // contrôler que les données rentrent bien ici
  }

  // dès que quelque chose "rentre" dans le component enfant via une propriété Input
  // ou à l'initialisation du component (une fois) cette méthode est appelée
  ngOnChanges() {
    // on vérifie que l'on a bien cliqué sur un album avant de rechercher dans la liste
    // des chansons.
    if(this.album){
      // récupération de la liste des chansons
      this.songs = this.albumService.getAlbumList(this.album.id);
      console.log(this.album.id)
    }
   
  }
  play(album: Album)
  {
    this.onPlay.emit(album);
   
  }
}
