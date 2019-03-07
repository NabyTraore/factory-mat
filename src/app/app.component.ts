import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, observable, Subscription} from "rxjs";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  secondes: number;
  counterSubscription: Subscription;

    constructor() {
    }
     ngOnInit(){
      const counter =  interval(1000);
      this.counterSubscription = counter.subscribe(
        (value) => {
          this.secondes = value;
        },
        (error) => {
          console.log('error' + error);
        },
        ()=>{
          console.log('Observable completed');
        }
      );
      console.log('Init counter');
     }
     ngOnDestroy(){
this.counterSubscription.unsubscribe();
console.log('Destroy', this.counterSubscription);
     }
}
