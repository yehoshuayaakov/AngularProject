import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { internModel } from '../model/intern.model';
import { InternserviceService } from './internservice.service';
import { ServerService } from './server.service';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
intern : internModel;
verification : boolean = true;
data: string;
  constructor(private internservice : InternserviceService, private server : ServerService, private router : Router) { }

  login(email: string, password : string){
    this.server.post<internModel>('auth/login', {email, password}).subscribe(data =>{
      console.log(data);
      if (data && data.token){

        this.server.token = data.token;
        this.internservice.currentInternUser.name = data.name;
        this.internservice.isIntern=true;
        //this.intern = data;
        if (data.roleNumber && data.roleNumber > 100){
          this.router.navigate(['/supervisorEntry']);
        }
        else if (data.roleNumber && data.roleNumber <100){
          this.router.navigate(['/simulatorOverview'])
        }
      }    
      else {
        this.server.verification = false;
        this.router.navigate(['/log-in']);

      }
    });
  }
  register(password : string, email : string){
    this.server.post<internModel>('auth/register', {password : password, email: email}).subscribe(data => {
      console.log();
    })
  }
}

