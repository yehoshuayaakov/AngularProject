import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { internModel } from '../model/intern.model';
import { ServerService } from './server.service';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
intern : internModel;
  constructor(private server : ServerService, private router : Router) { }

  login(name: string, Id : string){
    this.server.post<internModel>('auth/login', {name, Id}).subscribe(data =>{
      console.log(data);
      if (data && data.token){
        this.server.token = data.token;
        this.intern = data;
        this.router.navigate(['/simulatorOverview']);
      }    
    });
  }
  register(Id : string){
    this.server.post<internModel>('auth/register', {Id}).subscribe(data => {
      console.log(data);
    })
  }
}

