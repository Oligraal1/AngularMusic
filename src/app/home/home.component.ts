import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  

})
export class HomeComponent implements OnInit {
  titlePage: string = 'Bienvenue sur I love my Music';
  constructor() { }

  ngOnInit() {
  }

}
