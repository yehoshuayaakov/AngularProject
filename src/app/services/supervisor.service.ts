import { Injectable } from '@angular/core';
import { supervisorModel } from '../model/supervisor.model';

@Injectable({
  providedIn: 'root'
})
export class SupervisorService {
supervisor : supervisorModel = {
  name: null,
  Id: null,
  phonenumber: null,
  citizenshipId: null,
  email: null
};
isSupervisor: boolean = false;
  constructor() { }

changeCurrentUser(s: supervisorModel){
  this.supervisor = s;
  }
}