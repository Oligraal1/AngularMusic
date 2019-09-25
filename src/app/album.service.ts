import { Injectable } from '@angular/core';
import { Album, List } from './album';
import { ALBUMS } from './mock-albums';
import { ALBUM_LISTS } from './mock-albums';
import { Observable } from 'rxjs';
import { domain } from 'process';
import { Page } from './page';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  [x: string]: any;

  private _albums: Album[] = ALBUMS; // _ convention private et protected

  private _albumList: List[] = ALBUM_LISTS;


  constructor() {

  }

  getAlbums() {
   return this._albums;
  }
  getAlbum(id:string){
    return this._albums.find(elem => elem.id === id);
  }
  getAlbumList(id:string)
  {
    return this._albumList.find(list => list.id === id);
  }
  countAlbum(){

    var count = 0;
    for (let i=0;i < this._albums.length;i++) if(this._albums[i] != null) count++;
    console.log("nbre of Albums : "+count)
    return count;

    }
  paginate(start: number, end: number):Album[]{
    return this._albums.sort(
      (a, b) => { return b.duration - a.duration }
    ).slice(start, end);
  }
  search(word: string): Album[]
  {
    if (word.length > 2) {
      let response = [];
      this._albums.forEach(album => {
        if (album.title.includes(word)) response.push(album);
      });
      console.log ("Response : "+ response)
      return response;
    }
  }
  count(): number {

    return this._albums? this._albums.length : 0;
  }
  paginateNumberPage():number{
    if ( typeof environment.numberPage == 'undefined' )
      throw "Attention la pagination n'est pas définie" ;

    return environment.numberPage ;
  }

//   headers = new Headers({'Content-Type': 'application/json', 'Accept': 'application/json'});

// getAlbumsByParams(params: URLSearchParams): Observable<Page> {
//     const endpoint = domain + '/albums';
//     return this.http
//       .get(endpoint, { search: params, headers: this.headers })
//       .map((res: Response) => res.json())
//       .catch((e) => this.handleError(e));
// }
//   handleError(e: any) {
//     throw new Error("Method not implemented.");
//   }
}
