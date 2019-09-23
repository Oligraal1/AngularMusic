import { Component, HostBinding } from '@angular/core';
import { trigger, state, style, animate, transition} from '@angular/animations'//


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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

export class AppComponent {
  title = 'I love my Music';
  src = "./assets/img/lovemusicblue.jpg"
  
  
}

