import { Injectable } from '@angular/core';
import { Album, List } from './album';
import { ALBUMS } from './mock-albums';
import { ALBUM_LISTS } from './mock-albums';
import { Observable, Subject } from 'rxjs';
import { domain } from 'process';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase/app';
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

  // private _albums: Album[] = ALBUMS; // _ convention private et protected
  // private _albumList: List[] = ALBUM_LISTS;

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
      // map(albums => {
      //   return albums.sort((a, b) => {
      //     return b.duration - a.duration
      //   });
      // })
    )
  }

  getAlbum(id: string): Observable < Album > {
    return this.http.get < Album > (this.albumsUrl + `/${id}/.json`).pipe(map(album => album));
  }

getAlbumList(id: string): Observable <List> {

  return this.http.get<List>(this.albumListsUrl + `/${id}/.json`);

}
/**
 * Compte le nombre d'albums
 */
countAlbum():Observable<number> {

  return this.http.get<Album[]>(this.albumsUrl + '/.json').pipe(
    map(album => _.values(album)),
    map(albums => albums.length),

  );

}
/**
 * Incremente une pagination des albums
 * @param start
 * @param end
 */
paginate(start: number, end: number): Observable<Album[]> {
  return this.http.get<Album[]>(this.albumsUrl + '/.json', httpOptions).pipe(
    // Préparation des données pour avoir un format exploitable dans l'application
    // JSON en Array JSON
    map(albums => {
      let Albums: Album[] = [];
      _.forEach(albums, (v, k) => {
        v.id = k;
        Albums.push(v);
      });

      return Albums;
    }),
    // Ordonner les albums par ordre de durée décroissante
    map(albums => {
      return albums.sort(
        (a, b) => { return b.duration - a.duration }
      ).slice(start, end); // slicing des données
    })
  )
  }

/**
 * Gère la barre de recherche
 * @param word
 */
search(word: string): Observable<Album[]> {

  return this.http.get<Album[]>(this.albumsUrl + `/.json`).pipe(
    map(albums => {
      let search: Album[] = [];
      let re = new RegExp('^' + word.trim())
      _.forEach(albums, (v, k) => {
        v.id = k;
        if (v.title.match(re) != null) search.push(v);

      })

      return search;
    })
  );
}


/**
 * Crée une pagination dans le component album avec barre next et previous
 */
count(): number {
  console.log('albums url : ' , this.albumsUrl.length)
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

switchOn(album: Album): void {
  album.status = 'on';
  // le code ici s'exécute car souscription
  this.http.put<void>(this.albumsUrl + `/${album.id}/.json`, album).subscribe(
    e => e,
    error => console.warn(error),
    () => {
      this.subjectAlbum.next(album);
    }
  );
}

switchOff(album: Album): void {
  album.status = 'off';
  this.http.put<void>(this.albumsUrl + `/${album.id}/.json`, album).subscribe(() => {
  });
}
}

