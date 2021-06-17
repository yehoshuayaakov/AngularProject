import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
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
  internRoleNumber = 99;
  supervisorRoleNumber = 199;
  constructor(private http: HttpClient, private intern :InternserviceService) { 
    this.currentUser = intern.currentInternUser;
  }

  registerIntern(name : string, phonenumber : number, id : string, citizenshipId :  number, email : string): Observable<object>{
    return this.http.post( this.baseUrl + "api/createUser/create", {name: name, phonenumber: phonenumber, Id : id, citizenshipId : citizenshipId, email : email, roleNumber : this.internRoleNumber})
  }
  addPersonalInfo(Info : object) : Observable<any>{
    console.log(Info);
    return this.http.put(this.baseUrl + "api/interns/" + this.currentUser.Id, {personalDetails : Info})
    
    
  }
  post<T>(path: String, data: {}): Observable<T> {
    return this.http.post<T>(this.baseUrl + path, data)
  }
  addProfessionalInfo(Info : object) : Observable<any>{
    console.log(this.currentUser.Id);
    
    return this.http.put(this.baseUrl + "api/interns/" + this.currentUser.Id, {  professionalDetails: Info })
}
registerSupervisor(name : string, phonenumber : number, id : string, citizenshipId :  number, email : string): Observable<object>{
  return this.http.post( this.baseUrl + "api/supervisors/create", {name: name, phonenumber: phonenumber, Id : id, citizenshipId : citizenshipId, email : email, roleNumber: this.supervisorRoleNumber})
}
getAllInterns() : Observable<any>{
  return this.http.get(this.baseUrl + "api/interns/getAll");
}
getInternsWithToken(): Observable<any>{
  var string = this.token.toString();
  const headers = {
    'content-type' :  'application/json',
    'x-access-token' : string
  }
  
  return this.http.get(this.baseUrl + "api/interns/getAll", {'headers': headers});
}
registerUser(user : internModel): Observable<object>{
  return this.http.post( this.baseUrl + "api/createUser/create", {internSchema : user})
}
}
