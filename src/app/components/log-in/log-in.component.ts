import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  email: string;
  password : string;
  verification : boolean;
  constructor(private authentification : AuthentificationService, private router : Router) { 
    
  }


  ngOnInit(): void {
  }

  login(){
    this.authentification.login(this.email, this.password);
    
  }
}
