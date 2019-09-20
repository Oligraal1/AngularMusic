import {
  Component,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';
import {
  NgForm
} from '@angular/forms'; // template-driven
import {
  AlbumService
} from '../album.service';
import {
  Album
} from '../album';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() onSearch: EventEmitter < Album[] > = new EventEmitter;
  @Output() notFound: EventEmitter < string > = new EventEmitter;

  constructor(private albumService: AlbumService) {}

  ngOnInit() {}
  onSubmit(form: NgForm): void { // récupération des données du formulaire
    console.log("valeur form de search.ts : " + form.value['word']);
    let search = this.albumService.search(form.value['word']);
    //
    console.log('ooooo :', search)
    let message = "Désolé, la recherche n'a rien donné."
    
    if(search.length != 0) 
    {
      this.onSearch.emit(search);
    }
    else {
      this.notFound.emit(message);
    }
  }
}

