import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { internModel } from 'src/app/model/intern.model';
import { InternserviceService } from 'src/app/services/internservice.service';
import { TestService } from 'src/app/services/test.service';
import { test } from 'src/app/supervisors/upload-test/upload-test.component';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { ChartsModule } from 'ng2-charts';
import { Color, Label } from 'ng2-charts';
@Component({
  selector: 'app-test-results',
  templateUrl: './test-results.component.html',
  styleUrls: ['./test-results.component.scss']
})
export class TestResultsComponent implements OnInit {
file : File;
path: string;
currentUser: internModel;
uploadProgress : Observable<number>;
task: AngularFireUploadTask;
tests : any[] = [];
gradedTests : any[] = [];
gradedTestsDate : any[]=[];
grades : any [] = [];
lastThreeGrades : any []=[];
lastThreeDates : any[]=[];
latestGrade: number;
testAverage;
untakenTests: test[]=[];
public lineChartData: ChartDataSets[] = [
  { data: this.lastThreeGrades, label: 'Last 3 Tests' },
 
];
public lineChartData2: ChartDataSets[] = [
  { data: this.grades, label: 'All Tests' },
 
];
public lineChartLabels2: Label[] = this.gradedTestsDate;
public lineChartLabels: Label[] = this.lastThreeDates;

public lineChartOptions: (ChartOptions & { }) ={ 
  //annotation: any }) = {
    scales : {
      yAxes: [{
        ticks: {
          beginAtZero : true,
          max: 100
        }
      }]
    },
  responsive: true,
  
};
public lineChartColors: Color[] = [
  {
    borderColor: 'black',
    backgroundColor: 'rgba(0,121,0,0.3)',
  },
];
public lineChartLegend = true;
public lineChartType = 'line';
public lineChartPlugins = [];
constructor(private internService : InternserviceService, private fb : AngularFireDatabase, private as : AngularFireStorage, private testService: TestService) { 
  this.currentUser = this.internService.currentInternUser;
console.log(this.currentUser);

}

  ngOnInit(): void {   
  
    this.testService.getAllTests().subscribe(tests => {
      var length = tests.length;
      tests.forEach(test => { 
     
        if (test.completedCode == 2 && test.internId == this.currentUser.id){
          this.gradedTests.push(test);
          this.latestGrade = this.gradedTests[this.gradedTests.length-1].grade;
          var sum = 0;
           this.gradedTests.forEach(test => sum+=test.grade);
           this.testAverage = (sum/this.gradedTests.length).toPrecision(4);
           var fixedDate = test.date.split(',');
           console.log(fixedDate[0]);
           
           this.gradedTestsDate.push(fixedDate[0]);
           this.lastThreeDates.push(fixedDate[0]);
           this.grades.push(test.grade);
           this.lastThreeGrades.push(test.grade);
           console.log(this.grades.length);
           if(this.lastThreeGrades.length>3){
             this.lastThreeGrades.shift();
             this.lastThreeDates.shift();
             //this.lastThreeGrades = this.lastThreeGrades.slice(0);
             console.log("test 3 tests");
             
             console.log(this.lastThreeGrades);
             
           }
           
         
        }
        if (test.completedCode == 0){
         if (test.id )
          this.tests.push(test);
          
          
         //this.compareLists(this.tests, this.gradedTests);
          
          
       console.log("filtertest");
       
       //console.log(this.tests);
       
        }
        
        //console.log("filtertest2");
     
      
     //console.log(this.grades[0]);
      
      })
      /*this.tests = this.tests.filter(t=>{
        for (var i = 0; i < this.gradedTests.length; i++) {
          t.id!=this.gradedTests[i].id;} 
        });*/

  });
this.testService.completedCode = 1;

  }
upload(event, test: test){
var date = new Date().toLocaleString();
this.path = event[0];
const filepath = "/completedTests/" + this.currentUser.name +"/" + test.name ;
const fileRef = this.as.ref(filepath);
const task = this.as.upload(filepath, event[0]);
//this.uploadFile();
this.task = this.as.upload(filepath , this.path);
var downloadUrl: String;
fileRef.getDownloadURL().subscribe((url)=>{
  downloadUrl = (url);
console.log(downloadUrl);
this.testService.submitTestforGrading(test.name, test.id, date, url, this.testService.completedCode, this.currentUser.id).subscribe();

})

}
uploadFile(){
  
//this.task = this.as.upload(this.filepath +Math.random()+ this.currentUser.name , this.path);
//this.uploadProgress = this.task.percentageChanges();
}
compareLists(arr : any[], arr2 :any[]){
 // arr.filter((v,i,arr2)=>arr2.findIndex(t=>(t.id === v.id))===-1)
//arr = arr.filter(test => arr2.findIndex(t=> test.id ===t.id)===-1)
arr = arr.filter(test => test.id == 1)
console.log("filter");
console.log(arr);


};
 
    



}
