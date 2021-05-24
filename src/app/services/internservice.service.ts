import { Injectable } from '@angular/core';
import { internModel } from '../model/intern.model';

@Injectable({
  providedIn: 'root'
})
export class InternserviceService {
internList : internModel [];
isIntern : boolean = false;
currentInternUser: internModel = {
  Name: null,
  Id: null,
  Phonenumber: null,
  CitizenshipId: null
};
  constructor() { 
    this.internList = [];
  }

  addIntern(i: internModel){
    this.internList.push(i);
  }
  changeCurrentUser(i: internModel){
    this.currentInternUser = i;
  }
 changeHeader(){
   this.isIntern = true;
 }
}
