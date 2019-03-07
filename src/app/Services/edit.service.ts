import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditService {
  private _name: string;
  private _statut = 'éteint';


  constructor() { }


  getname(): string {
    return this._name;
  }

  setname(value: string) {
    this._name = value;
  }

  getstatut(): string {
    return this._statut;
  }

  setstatut(value: string) {
    this._statut = value;
  }

}
