import { Injectable } from '@angular/core';
import { internModel } from '../model/intern.model';

@Injectable({
  providedIn: 'root'
})
export class InternserviceService {
internList : internModel [];
isIntern : boolean = false;
firstName: String;
chosenIntern: any;
currentInternUser: internModel = {
  name: null,
  Id: null,
  phonenumber: null,
  citizenshipId: null,
  email : null,
  password: null,
  personalDetails : {
  age :  null,
  country : null,
  city : null,
  graduationYear : null,
  academicInstitution :  null,
  },
  professionalDetails : {
    medicalInstitution : null,
    residency : null,
    department : null,
    yearsOfResidency : null
},
};
  constructor() { 
    this.internList = [];
  }

  addIntern(i: internModel){
    this.internList.push(i);
  }
  addPersonalInfo(info: object){
    this.currentInternUser.personalDetails = info;
  }
  addProfessionalInfo(info: object){
    this.currentInternUser.professionalDetails = info;
  }
  changeCurrentUser(i: internModel){
    this.currentInternUser = i;
  }
 changeHeader(){
   this.isIntern = true;
 }
 getFirstName(){
   var fullname = this.currentInternUser.name.split(' ');
  return fullname[0];
 }
}
