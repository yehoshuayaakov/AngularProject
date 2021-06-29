import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supervisor-entry',
  templateUrl: './supervisor-entry.component.html',
  styleUrls: ['./supervisor-entry.component.scss']
})
export class SupervisorEntryComponent implements OnInit {
//getInterns : boolean = false;
  constructor(private router : Router) { }

  ngOnInit(): void {
  }
getAll(){
  console.log("clicked");
  //console.log(this.getInterns);
  
  //this.getInterns = true;
  this.router.navigate(['/getAll']);
  //console.log(this.getInterns);
}
}
