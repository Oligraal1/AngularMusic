import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../album';
import { AlbumService } from '../album.service';
import { interval, Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-album-description',
  templateUrl: './album-description.component.html',
  styleUrls: ['./album-description.component.scss']
})
export class AlbumDescriptionComponent implements OnInit {

  titlePage = 'I love my Album';
  album:Album;

  constructor(
    private route: ActivatedRoute,
    private aS: AlbumService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
   this.aS.getAlbum(id).subscribe(album => this.album = album );

  }

}
