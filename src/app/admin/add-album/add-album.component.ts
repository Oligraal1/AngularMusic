import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { AlbumService } from'../../album.service';
import { Album } from 'src/app/album';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-album',
  templateUrl: './add-album.component.html',
  styleUrls: ['./add-album.component.scss']
})
export class AddAlbumComponent implements OnInit {
  
  albumForm: FormGroup;
  titlePage: string = "Ajouter une nouvelle page";
  //albums: Album[];
  @Input() albums: Album;
  
  // newID: number;
 

  constructor(private fb: FormBuilder, private aS: AlbumService, private router: Router){ 
  
  }

  ngOnInit() {
   this.albumForm = this.fb.group({

        name: new FormControl('', [
          Validators.required,
          Validators.minLength(2)
        ]),
        ref: new FormControl('', [
          Validators.required,
          Validators.minLength(2)
        ]),
        title: new FormControl('', [
          Validators.required,
          Validators.minLength(2)
        ]),
        description: new FormControl('', [
          Validators.required,
          Validators.maxLength(250)
        ]),
        duration: new FormControl('', [
          Validators.required,
          Validators.minLength(10)
        ]),
        url: new FormControl('', [
          Validators.required
        ]),
      })
      
      console.log('@input album', this.albums);
  }
 
get name() {
  return this.albumForm.get('name');
}
get ref() {
  return this.albumForm.get('ref');
}
get title() {
  return this.albumForm.get('title');
}
get description() {
  return this.albumForm.get('description');
}
get duration() {
  return this.albumForm.get('duration');
}
get url() {
  return this.albumForm.get('url');
}
onSubmit() {
  // this.aS.getAlbums().subscribe(albums =>console.log(albums) )
  //this.aS.getAlbums().subscribe(albums => {
    //let newID = albums.length
  //})
  // let newId  =this.albums.length +1;
  //console.log('newID', newID)
//   let album = {
//     //id : this.albums.length.toString(),
//     name : this.albumForm.value['name'],
//     ref : this.albumForm.value['ref'],
//     title : this.albumForm.value['title'],
//     description : this.albumForm.value['description'],
//     duration : this.albumForm.value['duration'],
//     url : this.albumForm.value['url'],
//     status : 'off'
//   }
  
 
//   this.aS.addAlbums(album).subscribe(
//     album => { console.log(album)},
//     error => console.error(error),
//     () => {
//       this.router.navigate(['/admin'], {queryParams: {message: 'success'}})
//     });
 }

}
