import { Injectable } from '@angular/core';
import { Album, List } from './album';
import { ALBUMS } from './mock-albums';
import { ALBUM_LISTS } from './mock-albums';



@Injectable({
  providedIn: 'root'
})
export class AlbumService {

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
}
