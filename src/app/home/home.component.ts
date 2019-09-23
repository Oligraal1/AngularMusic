import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // animations: [
  //   trigger('currentUncurrent', [
  //     state('current', style({
  //       color: 'blue',
  //     })),
  //     state('uncurrent', style({
  //       color: 'red',
  //     })),
    
  //     transition('current => uncurrent', [
  //       animate('1s')
  //     ]),
  //   ])
  //   ],
 
})
export class HomeComponent implements OnInit {
  titlePage: string = 'Bienvenue sur I love my Music';
  constructor() { }

  ngOnInit() {
  }

}
