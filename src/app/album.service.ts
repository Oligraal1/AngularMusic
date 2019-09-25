import {
  Injectable
} from '@angular/core';
import {
  Album,
  List
} from './album';
import {
  ALBUMS
} from './mock-albums';
import {
  ALBUM_LISTS
} from './mock-albums';
import {
  Observable,
  Subject
} from 'rxjs';
import {
  domain
} from 'process';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import {
  environment
} from '../environments/environment';
import {
  map
} from 'rxjs/operators';
import * as _ from 'lodash';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  [x: string]: any;

  private _albums: Album[] = ALBUMS; // _ convention private et protected

  private _albumList: List[] = ALBUM_LISTS;
  private albumsUrl = 'https://ilovemymusic.firebaseio.com/albums';
  private albumListsUrl = 'https://ilovemymusic.firebaseio.com/albumLists';
  subjectAlbum = new Subject < Album > ();
  sendCurrentNumberPage = new Subject < number > ();

  constructor(private http: HttpClient) {

  }
  /**
   * Getter
   */
  getAlbums(): Observable < Album[] > {
    return this.http.get < Album[] > (this.albumsUrl + '/.json', httpOptions).pipe(map(albums => _.values(albums)),
      map(albums => {
        return albums.sort((a, b) => {
          return b.duration - a.duration
        });
      })
    )
  }

  getAlbum(id: string): Observable < Album > {
    return this.http.get < Album > (this.albumsUrl + `/${id}/.json`).pipe(map(album => album));
  }

getAlbumList(id: string): Observable <Album> {
  //return this._albumList.find(list => list.id === id);
  console.log('+++',this.albumListUrl)
  return this.http.get < Album > (this.albumListUrl)
  .pipe(_.find(list => list.id === id))
  
}
/**
 * Compte le nombre d'albums
 */
countAlbum() {

  var count = 0;
  for (let i = 0; i < this.albumsUrl.length; i++)
    if (this.albumsUrl[i] != null) count++;
  console.log("nbre of Albums : " + count)
  return count;

}
/**
 * Incremente une pagination des albums
 * @param start 
 * @param end 
 */
// paginate(start: number, end: number): Observable<Album[]> {
//   map(albums => {
//     return albums.sort(
//       (a, b) => {
//         return b.duration - a.duration
//       }
//     ).slice(start, end);
//   })
  
}
/**
 * Gère la barre de recherche
 * @param word 
 */
search(word: string): Album[] {
  map(albums =>{
    if (word.length > 2) {
      let response = [];
      _.forEach(album => {
        if (album.title.includes(word)) response.push(album);
      });
      console.log("Response : " + response)
    return response;
    }
  }) 
}
/**
 * Crée une pagination dans le component album avec barre next et previous
 */
count(): number {

  return this.albumsUrl ? this.albumsUrl.length : 0;
}
paginateNumberPage(): number {
  if (typeof environment.numberPage == 'undefined')
    throw "Attention la pagination n'est pas définie";

  return environment.numberPage;
}

currentPage(page: number) {
  return this.sendCurrentNumberPage.next(page)
}
/**
 * Gère la barre de progression
 */

switchOn(album: Album) {
  this.albumsUrl.forEach(
    alb => {
      if (alb.id === album.id) {
        album.status = 'on';
      } else {
        alb.status = 'off';
      }
    }
  );
  this.subjectAlbum.next(album);
}

switchOff(album: Album) {
  this.albumsUrl.forEach(
    alb => {
      alb.status = 'off';
    }
  );
}
}
