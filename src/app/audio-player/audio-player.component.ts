import {
  Component,
  OnInit
} from '@angular/core';
import {
  AlbumService
} from '../album.service';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss']
})
export class AudioPlayerComponent implements OnInit {
  showplayer: boolean = false;
  current: number = 1;
  total: number = 1;
  ratio: number = 0;

  constructor(private aS: AlbumService) {}

  ngOnInit() {
    this.aS.subjectAlbum.subscribe(
      album => {
        this.showplayer = true;
        this.current = 1;
        let duree = album.duration;
        this.total = Math.floor(duree / 120);
        this.ratio = Math.floor(100 / this.total);
        let step = this.ratio;

        const timer = 120 * 1000;

        const player = setInterval(() => {
            this.current++;
            this.ratio += step; // on ajoute le ratio
            console.log('ratio : ',this.ratio);
            if (this.ratio > 100) {
              clearInterval(player);
              this.showplayer = false;
              // mise à jour du status dans l'album
              this.aS.switchOff(album);
            }
            }, timer);
        })
      }
  }
