import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { internModel } from 'src/app/model/intern.model';
import { InternserviceService } from 'src/app/services/internservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
isIntern : boolean;
currentUser : internModel;
  constructor(private internService :  InternserviceService, private router : Router) { 
    this.currentUser = internService.currentInternUser;
    this.isIntern = internService.isIntern;
  }

  ngOnInit(): void {
  }
goHome(){
this.router.navigate(["/"]);
this.internService.isIntern = false;
}
}
