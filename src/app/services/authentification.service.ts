import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { internModel } from '../model/intern.model';
import { ServerService } from './server.service';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
intern : internModel;
verification : boolean;
data: string;
  constructor(private server : ServerService, private router : Router) { }

  login(email: string, password : string){
    this.server.post<internModel>('auth/login', {email, password}).subscribe(data =>{
      console.log(data);
      if (data && data.token){

        this.server.token = data.token;
        //this.intern = data;
        if (data.roleNumber && data.roleNumber > 100){
          this.router.navigate(['/supervisorEntry']);
        }
        else if (data.roleNumber && data.roleNumber <100){
          this.router.navigate(['/simulatorOverview'])
        }
      }    
      else {
        this.verification = false;
      }
    });
  }
  register(password : string, email : string){
    this.server.post<internModel>('auth/register', {password : password, email: email}).subscribe(data => {
      console.log();
    })
  }
}

