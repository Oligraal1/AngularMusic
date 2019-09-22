import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbSlideEvent, NgbSlideEventSource, NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  event_list = [

     {
      event:'Damian Marley',

      eventDescription:'Medication',
      img: '../assets/img/medication.jpg',
      id:'slideTwo'

    },
    {
      event:'The Cure',
      eventDescription:'Disintegration',
      img: '../assets/img/cure.jpg',
      id: 'slideOne'
    },
     {
      event:'Mos Def',

      eventDescription:'The Ecstatic',
      img: '../assets/img/mos.jpg',
      id: 'slideThree'

    },]
  upcoming_events =  this.event_list;



 @ViewChild('mycarousel', {static : true}) carousel: NgbCarousel;

  constructor() {
  }
  ngOnInit(): void {

  }


  
}

