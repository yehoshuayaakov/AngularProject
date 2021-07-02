import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { internModel } from 'src/app/model/intern.model';
import { InternserviceService } from 'src/app/services/internservice.service';
import { ServerService } from 'src/app/services/server.service';


@Component({
  selector: 'app-professional-detail-form',
  templateUrl: './professional-detail-form.component.html',
  styleUrls: ['./professional-detail-form.component.scss']
})
export class ProfessionalDetailFormComponent implements OnInit {
professionalInfo : FormGroup;
currentUser : internModel;
isSubmitted : boolean;
  constructor(private internservice : InternserviceService, private server : ServerService, private router : Router) { 
    this.currentUser = internservice.currentInternUser;
  }

  ngOnInit(): void {
    this.professionalInfo = new FormGroup({
      medicalInstitution: new FormControl('', Validators.required),
      department: new FormControl(''),
      residency: new FormControl(''),
      yearsOfResidency: new FormControl('')

    })
  }
sendForm( form : FormGroup){
  this.isSubmitted = true;
 // this.currentUser.professionalInfo.Department = form.value.department;
  //this.currentUser.professionalInfo.Residency = form.value.residency;
  //this.currentUser.professionalInfo.medicalInstitution = form.value.instituion;
  //this.currentUser.professionalInfo.yearsOfResidency = form.value.year;  
  console.log(form.value);
  console.log(form.value.medicalInstituion);
this.addProfessionalDetails(form);
this.router.navigate(['/registerPassword']);
}

addProfessionalDetails(form : FormGroup){
  this.internservice.addProfessionalInfo(form.value);
  //this.server.addProfessionalInfo(form.value).subscribe(data => {
    //console.log(data);
//})
  
}
get formControls(){
  return this.professionalInfo['controls'];
}
}
