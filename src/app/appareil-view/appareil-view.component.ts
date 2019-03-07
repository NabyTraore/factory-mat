import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppareilService} from "../Services/appareil.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit, OnDestroy{
  appareils:any[];
  appareilSubscription: Subscription;

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });
  constructor(private appareilService: AppareilService) {}

  ngOnInit() {
    this.appareilSubscription = this.appareilService.appareilSubject.subscribe(
      (appareils:any[]) => {
        this.appareils = appareils;
      }
    );
    this.appareilService.emitAppareilSubject();
  }

  onAllume(){
    this.appareilService.switchOnAll();
    console.log('onAllume');
    this.appareilService.emitAppareilSubject();

  }
  onEteindre(){
    if(confirm("Etes-vous sur de les éteindres "))  {
      this.appareilService.switchOffAll();
      this.appareilService.emitAppareilSubject();
    }
    else{
      return null;
    }
    console.log('onEteindre');
  }

  ngOnDestroy() {
    this.appareilSubscription.unsubscribe();
  }

}
