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
  constructor(private http: HttpClient, private intern :InternserviceService) { 
    this.currentUser = intern.currentInternUser;
  }

  registerIntern(name : String, phonenumber : Number, id : Number, citizenshipId :  Number): Observable<object>{
    return this.http.post( this.baseUrl + "api/interns/create", {name: name, phonenumber: phonenumber, Id : id, citizenshipId : citizenshipId})
  }
}

