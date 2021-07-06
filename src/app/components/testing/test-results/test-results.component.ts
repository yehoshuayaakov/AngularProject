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
tests : test[] = [];

constructor(private internService : InternserviceService, private fb : AngularFireDatabase, private as : AngularFireStorage, private testService: TestService) { 
  this.currentUser = this.internService.currentInternUser;
console.log(this.currentUser);

}

  ngOnInit(): void {
    this.testService.getAllTests().subscribe(tests => 
      tests.forEach(test => { 
        if (test.completedCode == 0){
          this.tests.push(test);
        }
      }));
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
var downloadUrl: string;
fileRef.getDownloadURL().subscribe((url)=>{
  downloadUrl = (url);

})

this.testService.submitTestforGrading(test.name, test.id, date, downloadUrl, this.testService.completedCode, this.currentUser.id).subscribe();
}
uploadFile(){
  
//this.task = this.as.upload(this.filepath +Math.random()+ this.currentUser.name , this.path);
//this.uploadProgress = this.task.percentageChanges();
}
takeTest(){

}
}
