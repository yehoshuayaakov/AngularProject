import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/services/test.service';
import { test } from 'src/app/supervisors/upload-test/upload-test.component';

@Component({
  selector: 'app-all-graded-tests',
  templateUrl: './all-graded-tests.component.html',
  styleUrls: ['./all-graded-tests.component.scss']
})
export class AllGradedTestsComponent implements OnInit {
tests : test [] = [];
testsAverage ;
  constructor(private testService : TestService) { }

  ngOnInit(): void {
    var sum = 0;
this.testService.getAllTests().subscribe(data =>{
  data.forEach(test => {
    
    
     if (test.completedCode == 2){
      
    this.tests.push(test);
    sum+=test.grade;
      this.testsAverage = (sum/this.tests.length).toPrecision(4);
  }
  }); 
  //this.testsAverage = this.testService.getAverage(data);
  
 })
  }

}
