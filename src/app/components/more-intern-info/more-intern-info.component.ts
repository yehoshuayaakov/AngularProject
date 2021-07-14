import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { internModel } from 'src/app/model/intern.model';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { InternserviceService } from 'src/app/services/internservice.service';
import { TestService } from 'src/app/services/test.service';
import { test } from 'src/app/supervisors/upload-test/upload-test.component';

@Component({
  selector: 'app-more-intern-info',
  templateUrl: './more-intern-info.component.html',
  styleUrls: ['./more-intern-info.component.scss']
})
export class MoreInternInfoComponent implements OnInit {
intern: internModel;
tests: test[] = [];
show: boolean = false;
  constructor(private testService : TestService, private internService : InternserviceService, private router : Router, private authentification : AuthentificationService) { 
    this.intern = internService.chosenIntern;
  }

  ngOnInit(): void {
//this.tests = this.intern.tests;
this.testService.getAllTests().subscribe(data=>{
  data.forEach(test => {
    if (test.completedCode == 2 && test.internId == this.intern.id){
      this.tests.push(test);
    }
  });
})
  }
goBack(){
  
this.router.navigate(['/getAll']);

}
showTests(){
this.show = !this.show;
}
}
