import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { internModel } from 'src/app/model/intern.model';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { InternserviceService } from 'src/app/services/internservice.service';

import { ServerService } from 'src/app/services/server.service';

@Component({
  selector: 'app-register-password',
  templateUrl: './register-password.component.html',
  styleUrls: ['./register-password.component.scss']
})
export class RegisterPasswordComponent implements OnInit {
password : string;
confirmation : string;
tryAgain: boolean = false;
currentUser : internModel;
  constructor(private internService: InternserviceService, private router : Router, private server : ServerService, private authenticate : AuthentificationService) { 
this.currentUser = this.internService.currentInternUser;
  }

  ngOnInit(): void {
  }
register(){
  if (this.password == this.confirmation){
    //this.internService.currentInternUser.password = this.password;
    this.server.registerUser(this.currentUser).subscribe(data=>{
      console.log("call from agular to server " + data);
    });
    console.log(this.currentUser);
    
    this.authenticate.register(this.password, this.currentUser.email);
    if (this.currentUser.roleNumber<100){
    this.router.navigate(['/simulatorOverview'])
    }
    else if (this.currentUser.roleNumber>99){
      this.router.navigate(['/supervisorEntry'])
    }
  }
  else{
    this.tryAgain = true;
    this.password = null;
    this.confirmation = null;
  }
}
}
