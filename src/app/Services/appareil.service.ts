import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppareilService {
  appareilSubject = new Subject<any[]>();
  appareils = [
    {
      id: 1,
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      id: 2,
      name: 'Frigo',
      status: 'allumé'
    },
    {
      id: 3,
      name: 'Ordinateur',
      status: 'éteint'
    },
    {
      id: 4,
      name: 'Ventilo',
      status: 'éteint'
    },
    {
      id: 5,
      name: 'Télephone',
      status: 'éteint'
    }
  ];

  constructor() { }

  //Subject
  emitAppareilSubject(){
    this.appareilSubject.next(this.appareils.slice());
  }

  //Allumer tous les appareils
  switchOnAll(){
    for (let appareil of this.appareils) {
      appareil.status = 'allumé';
      this.emitAppareilSubject();
    }
  }
  switchOnOne(i: number){
    this.appareils[i].status = 'allumé';
    this.emitAppareilSubject();
  }
  switchOffOne(i: number){
    this.appareils[i].status = 'éteint';
    this.emitAppareilSubject();
  }
  switchOffAll(){
    for (let appareil of this.appareils) {
      appareil.status = 'éteint';
      this.emitAppareilSubject();
    }
  }

  getAppareilById(id: number) {
    const appareil = this.appareils.find(
      (s) => {
        return s.id === id;
      }
    );
    return appareil;
  }

  //Add Appareil depuis le formulaire

  addAppareil(name: string, status: string){
const appareilObject = {
  id: 0,
  name: '',
  status: ''
};
  appareilObject.name = name;
  appareilObject.status =  status;
  appareilObject.id = this.appareils[(this.appareils.length -1)].id + 1;
  this.appareils.push(appareilObject);
  this.emitAppareilSubject();
  }
}
