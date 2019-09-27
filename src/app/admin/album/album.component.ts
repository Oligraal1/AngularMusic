import { Component, OnInit } from '@angular/core';
import { AlbumService } from 'src/app/album.service';
import { Album } from 'src/app/album';


@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  albums: Album[]; 
  constructor(private albumService: AlbumService) { 
    
  }

  ngOnInit() {
    //this.albumService.getAlbums().subscribe(albums => console.log("tous les albums ",albums))
  this.albumService.getAlbums().subscribe(albums => this.albums = albums)
    
    //console.log("length :", this.albums.length)
    
  }
  
/**
   * Gère la pagination de la page
   * @param event
   */
  paginate($event) {
    this.albumService.paginate($event.start, $event.end).subscribe(albums=>this.albums = albums);
 }
}
