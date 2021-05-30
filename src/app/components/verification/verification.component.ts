import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { internModel } from 'src/app/model/intern.model';
import { InternserviceService} from 'src/app/services/internservice.service'
import { FormBuilder, FormGroup} from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';
import { Router } from '@angular/router';
import { ServerService } from 'src/app/services/server.service';


@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss']
})
export class VerificationComponent implements OnInit {
  myCode : FormGroup;
  code: string;
  currentUser :  internModel;
  codeNumber: Number;
  realCode: string;
  codes: string [];
  verification: boolean = false;
  firstTry: boolean = true;
  @ViewChild("first") firstNumber : ElementRef;
  constructor(private fb : FormBuilder, internService: InternserviceService,  private router: Router, private server: ServerService) {
    this.currentUser = internService.currentInternUser;
    this.codeNumber = this.createCodes();
    this.realCode = this.codeNumber.toString();
    this.currentUser.Firstname = internService.getFirstName();
    console.log(this.realCode);
   }

  ngOnInit(): void {
    this.myCode = this.fb.group({
      first: '',
      second: '',
      third: '',
      fourth: ''
    });
  }
  
  getCode(form: FormGroup){
    this.code = form.value.first + form.value.second + form.value.third + form.value.fourth;
  console.log(this.code);
  console.log(this.verification)
  if (this.code == this.realCode){
    this.verification = true;
    this.router.navigate(['/picture']);
    this.register();
    console.log(this.verification)
  }
  else {
    this.router.navigate(['/verification']);
    this.firstTry = false;
    this.myCode.setValue({
      first: '',
      second: '',
      third: '',
      fourth: ''
    });
    this.firstNumber.nativeElement.focus();
  }
}
checkCode(){
  if (this.code == this.realCode){
    this.register();
    console.log(this.register());
    return true;
   
  }
}
resend(){

}
createCodes(){
  
  var x = Math.floor((Math.random()*10000));
if (x <1000){
  x += 1000;
}
return x;
  
}
register(){
  this.server.registerIntern(this.currentUser.Name, this.currentUser.Phonenumber, this.currentUser.Id, this.currentUser.CitizenshipId).subscribe(data=>{
console.log(data);
  })
}

}
