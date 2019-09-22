import { Component, OnInit } from '@angular/core';
import {trigger,state,style,animate,transition} from'@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: ['animation triggers']
})
export class HomeComponent implements OnInit {
  titlePage: string = 'Bienvenue sur I love my Music';
  constructor() { }

  ngOnInit() {
  }

}
