import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  titlePage: string = 'I love my Administration';
  title = 'I love my Music';
  constructor() { }

  ngOnInit() {
  }

}
