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
      console.log("test");
    if (!data.token)
    {
      console.log("problem");
      
    }

      if (data && data.token){
console.log(data);

        this.server.token = data.token;
        this.internservice.currentInternUser = data;
        this.internservice.currentInternUser.name = data.name;
        this.internservice.isIntern=true;
        //this.intern = data;
        console.log(this.internservice.currentInternUser);
        
        if (data.roleNumber && data.roleNumber > 100){
          this.router.navigate(['/supervisorEntry']);
        }
        else if (data.roleNumber && data.roleNumber <100){
          this.router.navigate(['/simulatorOverview'])
        }
      }    
      this.server.verification = true;
     
    }, 
    err =>{
      if (err)
      console.log("error");
      
        this.server.verification = false;
        //window.location.reload();
        this.router.navigate(['/invalidLogIn']);
        this.server.verification = false;
        
        
      });
  }
  register(password : string, email : string){
    this.server.post<internModel>('auth/register', {password : password, email: email}).subscribe(data => {
      console.log();
    })
  }
}

