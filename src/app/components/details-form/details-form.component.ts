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
      country: new FormControl(''),
      city: new FormControl(''),
      academicInstitution: new FormControl(''),
      graduationYear: new FormControl('')   
     })
     console.log("testtt2");
  }
sendForm(form :  FormGroup){
  console.log("testtt3");
console.log(form.value);
console.log(form.value.age);

/*this.currentUser.personalDetails.age = form.value.age;
this.currentUser.personalDetails.graduationYear = form.value.year;
this.currentUser.personalDetails.country = form.value.country;
this.currentUser.personalDetails.city = form.value.city;
this.currentUser.personalDetails.graduationYear = form.value.year;*/
this.router.navigate(["/professionalDetails"])
this.addDetails(form);
}
addDetails(form : FormGroup){
  this.server.addPersonalInfo(form.value).subscribe(data =>{
    console.log(form.value);
  })
}
}
