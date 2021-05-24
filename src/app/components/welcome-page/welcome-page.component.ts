import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {
show = true;
showIntern = false;
showSupervisor = false;
  constructor() { }

  ngOnInit(): void {
  }

  getInternMessage(){
    this.show = false;
    this.showIntern = true;
    this.showSupervisor = false;
  }
  getSupervisorMessage(){
    this.show = false;
    this.showIntern = false;
    this.showSupervisor = true;
  }
}
