import { Injectable } from '@angular/core';
import { Album, List } from './album';
import { ALBUMS } from './mock-albums';
import { ALBUM_LISTS } from './mock-albums';
import { Observable, Subject } from 'rxjs';
import { domain } from 'process';

import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  [x: string]: any;

  private _albums: Album[] = ALBUMS; // _ convention private et protected

  private _albumList: List[] = ALBUM_LISTS;
  subjectAlbum = new Subject<Album>();
  sendCurrentNumberPage = new Subject<number>();
  
  constructor() {

  }
/**
 * Getter
 */
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
  /**
   * Compte le nombre d'albums
   */
  countAlbum(){

    var count = 0;
    for (let i=0;i < this._albums.length;i++) if(this._albums[i] != null) count++;
    console.log("nbre of Albums : "+count)
    return count;

    }
    /**
     * Incremente une pagination des albums
     * @param start 
     * @param end 
     */
  paginate(start: number, end: number):Album[]{
    return this._albums.sort(
      (a, b) => { return b.duration - a.duration }
    ).slice(start, end);
  }
  /**
   * Gère la barre de recherche
   * @param word 
   */
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
  /**
   * Crée une pagination dans le component album avec barre next et previous
   */
  count(): number {

    return this._albums? this._albums.length : 0;
  }
  paginateNumberPage():number{
    if ( typeof environment.numberPage == 'undefined' )
      throw "Attention la pagination n'est pas définie" ;

    return environment.numberPage ;
  }
 
  currentPage(page: number) {
    return this.sendCurrentNumberPage.next(page)
  }
/**
 * Gère la barre de progression
 */

switchOn(album: Album){
  this._albums.forEach(
    alb => {
      if (alb.id === album.id) {
        album.status = 'on';
      } 
      else
      {
        alb.status = 'off';
      }
    }
  );
  this.subjectAlbum.next(album);
}

switchOff(album: Album){
  this._albums.forEach(
    alb => {
      alb.status = 'off';
    }
  );
}
}
