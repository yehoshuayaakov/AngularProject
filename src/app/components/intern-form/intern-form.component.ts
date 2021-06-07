import { Component, OnInit } from '@angular/core';
import { internModel } from 'src/app/model/intern.model';
import { FormGroup, FormControl } from '@angular/forms';
import { InternserviceService} from 'src/app/services/internservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intern-form',
  templateUrl: './intern-form.component.html',
  styleUrls: ['./intern-form.component.scss']
})
export class InternFormComponent implements OnInit {
intern: internModel = {
  Name: null,
  Id: null,
  Phonenumber: null,
  CitizenshipId: null
}
currentUser : internModel;

  constructor(private router : Router, private internService : InternserviceService) { 
    this.currentUser = this.internService.currentInternUser;
  }

  ngOnInit(): void {
  }

  createIntern(i: internModel){
    console.log("hello");
    
    this.intern = i;
    console.log(i);
    this.internService.addIntern(i);
    this.internService.changeCurrentUser(i);
    this.router.navigate([ "/verification"]);
    
  }

}
