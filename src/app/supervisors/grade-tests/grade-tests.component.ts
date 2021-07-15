import { Component, OnInit } from '@angular/core';
import { test } from '../upload-test/upload-test.component';
import { ServerService } from 'src/app/services/server.service';
import { TestService } from 'src/app/services/test.service';
import { internModel } from 'src/app/model/intern.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-grade-tests',
  templateUrl: './grade-tests.component.html',
  styleUrls: ['./grade-tests.component.scss']
})
export class GradeTestsComponent implements OnInit {
  tests :  any[] = [];
  numberOfTests : number = null;
  testGrade: number = null;
  currentIntern: internModel;
    constructor(private server : ServerService, private testService: TestService, private router : Router) { }
  
    ngOnInit(): void {
      this.testService.getAllTests().subscribe(data=>{
        console.log(data);
        
        data.forEach(test => {
          if(test.completedCode == 1){
            this.tests.push(test);
          }
        });
        console.log(this.tests[0].testUrl);
        
      })
      this.numberOfTests=this.tests.length;
    }
submitGrade(test: test){
  console.log( test);
  var date = new Date().toLocaleString();
  test.grade = this.testGrade;
  test.completedCode = 2;
  this.server.addGradedTest(test, test.internId).subscribe();
  console.log("internId" + test.internId);
  
  //this.testService.createTest(test.name, test.id, date, test.testUrl,test.completedCode, test.supervisorId).subscribe();
  this.testService.addGradedTest(test).subscribe(data =>
    console.log(data),
    err =>
    console.log(err)
    );
 console.log(date);
 console.log(test);
 this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
this.router.navigate(['/gradeTests']));
 this.router.navigate(['/gradeTests']);
 
}
}
