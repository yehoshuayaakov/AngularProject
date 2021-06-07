import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InternserviceService } from './internservice.service';
import { internModel } from '../model/intern.model';
@Injectable({
  providedIn: 'root'
})
export class ServerService {
  currentUser : internModel;
  baseUrl = 'http://localhost:3000/';
  token : String = '';

  constructor(private http: HttpClient, private intern :InternserviceService) { 
    this.currentUser = intern.currentInternUser;
  }

  registerIntern(name : String, phonenumber : number, id : string, citizenshipId :  Number): Observable<object>{
    return this.http.post( this.baseUrl + "api/interns/create", {name: name, phonenumber: phonenumber, Id : id, citizenshipId : citizenshipId})
  }
  addPersonalInfo(Info : object){
    return this.http.put(this.baseUrl + "api/interns/" + this.currentUser.Id, {personalDetails : Info})
  }
  post<T>(path: String, data: {}): Observable<T> {
    return this.http.post<T>(this.baseUrl + path, data)
  }
  addProfessionalInfo(Info : object) : Observable<object>{
    console.log(this.currentUser.Id);
    
    return this.http.put(this.baseUrl + "api/interns/" + this.currentUser.Id, {  professionalDetails: Info })
}
}
