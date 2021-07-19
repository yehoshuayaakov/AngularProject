import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InternserviceService } from './internservice.service';
import { internModel } from '../model/intern.model';
import { Router } from '@angular/router';
import { AuthentificationService } from './authentification.service';
import { test } from '../supervisors/upload-test/upload-test.component';
@Injectable({
  providedIn: 'root'
})
export class ServerService {
  currentUser : internModel;
  baseUrl = 'http://localhost:3000/';
  token : String = '';
  internRoleNumber = 99;
  supervisorRoleNumber = 199;
  verification: boolean = true;

  constructor( private http: HttpClient, private intern :InternserviceService, private router : Router) { 
    this.currentUser = intern.currentInternUser;
    /*setTimeout(function(){
      this.token = null;
      router.navigate(['/log-in']);
    }, 1000 * 6  )
    setInterval(function(){
      if (!this.token){
      this.verification = false;
        
        alert("Your session has expired. Please log in again.")
      }
    },1000* 61)*/
  }

  registerIntern(name : string, phonenumber : number, id : Number, citizenshipId :  number, email : string): Observable<object>{
    return this.http.post( this.baseUrl + "api/interns/create", {name: name, phonenumber: phonenumber, id : id, citizenshipId : citizenshipId, email : email, roleNumber : this.internRoleNumber})
  }
  addPersonalInfo(Info : object) : Observable<any>{
    console.log(Info);
    return this.http.put(this.baseUrl + "api/interns/" + this.currentUser.id, {personalDetails : Info})
    
    
  }
  addGradedTest(test : test, id : number) : Observable<any>{
    console.log("addingtest to intern function");
    
    console.log(test);
    var string = this.token.toString();
    const headers = {
      'content-type' :  'application/json',
      'x-access-token' : string
    }
    var date = new Date().toLocaleString();
    test.date = date;
    return this.http.put(this.baseUrl + "api/interns/" + id, {test: test}, {'headers': headers});
    
    
  }
  post<T>(path: String, data: {}): Observable<T> {
    return this.http.post<T>(this.baseUrl + path, data)
  }
  addProfessionalInfo(Info : object) : Observable<any>{
    console.log(this.currentUser.id);
    
    return this.http.put(this.baseUrl + "api/interns/" + this.currentUser.id, {  professionalDetails: Info })
}
registerSupervisor(name : string, phonenumber : number, id : number, citizenshipId :  number, email : string): Observable<object>{
  return this.http.post( this.baseUrl + "api/supervisors/create", {name: name, phonenumber: phonenumber, id : id, citizenshipId : citizenshipId, email : email, roleNumber: this.supervisorRoleNumber})
}
getAllInterns() : Observable<any>{
  return this.http.get(this.baseUrl + "api/interns/getAll");
}
getInternsWithToken(): Observable<any>{
  console.log(this.token);
  
  var string = this.token.toString();
  const headers = {
    'content-type' :  'application/json',
    'x-access-token' : string
  }
  if (!this.token){
    this.router.navigate(['/log-in']);
  }
  
  return this.http.get(this.baseUrl + "api/interns/getAll", this.getHeaders());
}
registerUser(user : {}): Observable<object>{
  console.log("server test " + user);
  
  return this.http.post(this.baseUrl + "createUser/create", user)
}
getHeaders(){
  var string = this.token.toString();
  const headers = {
    'content-type' :  'application/json',
    'x-access-token' : string
  }
  return {headers : headers}
}
}
