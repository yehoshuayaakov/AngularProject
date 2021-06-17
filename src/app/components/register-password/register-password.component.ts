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
    this.authenticate.register(this.password, this.currentUser.Name);
    this.router.navigate(['/simulatorOverview'])
  }
  else{
    this.tryAgain = true;
    this.password = null;
    this.confirmation = null;
  }
}
}
