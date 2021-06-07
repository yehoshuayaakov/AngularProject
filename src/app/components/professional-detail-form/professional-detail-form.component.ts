import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
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
  constructor(private internservice : InternserviceService, private server : ServerService) { 
    this.currentUser = internservice.currentInternUser;
  }

  ngOnInit(): void {
    this.professionalInfo = new FormGroup({
      institution: new FormControl(''),
      department: new FormControl(''),
      residency: new FormControl(''),
      yearsOfResidency: new FormControl('')

    })
  }
sendForm( form : FormGroup){
 // this.currentUser.professionalInfo.Department = form.value.department;
  //this.currentUser.professionalInfo.Residency = form.value.residency;
  //this.currentUser.professionalInfo.medicalInstitution = form.value.instituion;
  //this.currentUser.professionalInfo.yearsOfResidency = form.value.year;  
  console.log(form.value);
this.addProfessionalDetails()
}

addProfessionalDetails(){
  this.server.addProfessionalInfo(this.professionalInfo.value).subscribe(data => {
    console.log(data);
})
  
}
}
