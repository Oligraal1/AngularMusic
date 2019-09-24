import { Component, OnDestroy } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { map, take, min } from 'rxjs/operators';
import { match } from 'minimatch';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
    
})

export class AppComponent {
  title = 'I love my Music';
  src = "./assets/img/lovemusicblue.jpg"
  // seconds: number;
  // counterSubscription: Subscription;
  // minuteSubscription:Subscription;
  // minutes: number;
  // hours: number ;
  timer: string;
  count: Observable<number>


  ngOnInit(): void {

    this.count = interval(1000);
    // on prépare les données avant de souscrire à l'Observable
    const interval$ = this.count.
      pipe(
        map(num => {
          let hours = Math.floor(num / 3600);
          let minutes = Math.floor(num / 60);

          return `${hours} h ${minutes - hours * 60} min ${num - minutes * 60} s`
        }),
        take(12 * 60 * 3) // permet d'arrêter ici au bout de 12*3 minutes interval particulier à interval RxJS 6
      )

    // on souscrit à l'Observable interval
    interval$.subscribe(
      num => this.timer = num
    );
  }
    
  //  const counterSec = interval(1000);
  //  const counterMin = interval(10000);
  //  this.counterSubscription = counterSec.pipe(take(12*3600)).subscribe((val)=>{
  //    console.log('++val: ', val);
  //     // this.seconds = val;
  //     //this.minutes = val;

  //     if (val == 10) {
        
  //       this.minutes = 1;
  //       val =0;
  //       counterSec;
  //     }
   
  //   },
    
  //   (error) => {
  //     console.log('Oups, il y a une erreur' + error);
  //   },
  //   () => {
  //     console.log('Observable complete !');
  //   }); 
  //   this.minuteSubscription = counterMin.subscribe((minute) => {
  //       this.minutes = minute;
  //   })
    
  }
// ngOnDestroy(): void {
//   //Called once, before the instance is destroyed.
//   //Add 'implements OnDestroy' to the class.
//   this.counterSubscription.unsubscribe();
// }


