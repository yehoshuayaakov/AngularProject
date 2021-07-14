import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { internModel } from 'src/app/model/intern.model';
import { InternserviceService } from 'src/app/services/internservice.service';
import { TestService } from 'src/app/services/test.service';
import { test } from 'src/app/supervisors/upload-test/upload-test.component';
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
latestGrade: number;
testAverage;
untakenTests: test[]=[];
constructor(private internService : InternserviceService, private fb : AngularFireDatabase, private as : AngularFireStorage, private testService: TestService) { 
  this.currentUser = this.internService.currentInternUser;
console.log(this.currentUser);

}

  ngOnInit(): void {   
  
    this.testService.getAllTests().subscribe(tests => {
      tests.forEach(test => { 
     
        if (test.completedCode == 2 && test.internId == this.currentUser.id){
          this.gradedTests.push(test);
          this.latestGrade = this.gradedTests[this.gradedTests.length-1].grade;
          var sum = 0;
           this.gradedTests.forEach(test => sum+=test.grade);
           this.testAverage = (sum/this.gradedTests.length).toPrecision(4);
        }
        if (test.completedCode == 0){
         if (test.id )
          this.tests.push(test);
         //this.compareLists(this.tests, this.gradedTests);
      
       console.log("filtertest");
       
       console.log(this.tests);
       
        }
        
        //console.log("filtertest2");
     
      
      //console.log(this.tests);
      
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
