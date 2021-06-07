import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { internModel } from 'src/app/model/intern.model';
import { InternserviceService } from 'src/app/services/internservice.service';
import { ServerService } from 'src/app/services/server.service';

@Component({
  selector: 'app-details-form',
  templateUrl: './details-form.component.html',
  styleUrls: ['./details-form.component.scss']
})
export class DetailsFormComponent implements OnInit {
personalInfo : FormGroup;
currentUser : internModel;
  constructor( private router : Router, private internService : InternserviceService, private server : ServerService) { 
    this.currentUser = internService.currentInternUser;
  }

  ngOnInit(): void {
    console.log("testtt1");
    this.personalInfo = new FormGroup({
      age: new FormControl(''),
      institution: new FormControl(''), 
      country: new FormControl(''),
      city: new FormControl(''),
      graduationYear: new FormControl(''),
        
     })
     console.log("testtt2");
  }
sendForm(form :  FormGroup){
  console.log("testtt3");
console.log(form.value);
this.currentUser.age = form.value.age;
this.currentUser.GraduationYear = form.value.year;
this.currentUser.Country = form.value.country;
this.currentUser.City = form.value.city;
this.currentUser.GraduationYear = form.value.year;
this.router.navigate(["/professionalDetails"])
this.addDetails();
}
addDetails(){
  this.server.addPersonalInfo(this.personalInfo.value).subscribe(data =>{
    console.log(data);
  })
}
}
