import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  constructor(private authentification : AuthentificationService, private router : Router) { }
name: string;
id : string;
  ngOnInit(): void {
  }

  login(){
    this.authentification.login(this.name, this.id);
    
  }
}
