import { Component, OnInit } from '@angular/core';
import { AngularFireUploadTask, AngularFireStorage } from '@angular/fire/storage';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { internModel } from 'src/app/model/intern.model';
import { InternserviceService } from 'src/app/services/internservice.service';
import { map, finalize } from 'rxjs/operators'
import { FormControl, FormGroup, ReactiveFormsModule  } from '@angular/forms';
import { TestService } from 'src/app/services/test.service';
@Component({
  selector: 'app-upload-test',
  templateUrl: './upload-test.component.html',
  styleUrls: ['./upload-test.component.scss']
})
export class UploadTestComponent implements OnInit {
  file : File;
  path: string;
  showTests: boolean;
  uploaded: boolean;
  uploadState;
  currentUser: internModel;
  uploadProgress : Observable<number>;
  task: AngularFireUploadTask;
  testUrl : string;
  
  uploadingTest : test = {
    name: null,
    id : null,
    date : null,
    url : null,
    completedCode : null,
  };
  tests : test[]= [];
  testForm : FormGroup ;
  constructor(private testService : TestService, private internService : InternserviceService, private fb : AngularFireDatabase, private as : AngularFireStorage) { }

  ngOnInit(): void {
    this.currentUser = this.internService.currentInternUser;
    this.testService.completedCode =0;
    this.testForm = new FormGroup({
      testName : new FormControl(''),
      testId: new FormControl(''),
      file: new FormControl('')
    }) 
    
  }
  upload($event){
    this.path = $event.target.files[0];
    }
    uploadFile(form : FormGroup){
      console.log(form.value);
      
//      const DATE_TIME_FORMAT = 'YYYY-MM-DDTHH:mm'; 
///let _now: Moment;
//_now = moment(new Date(), DATE_TIME_FORMAT);
      var date = new Date().toLocaleString();
    this.uploadingTest.date = date;
    this.uploadingTest.name = form.value.testName;
    console.log(form.value.testName + " upload function");
    
    this.uploadingTest.id = form.value.testId;
    this.uploadingTest.url = form.value.file;
    var filePath = '/tests/'+this.uploadingTest.name;
    this.task = this.as.upload( filePath, this.path);
    this.uploadProgress = this.task.percentageChanges();
    const fileref = this.as.ref(filePath);
    //this.tests.push(this.uploadingTest);
    console.log(this.uploadingTest);
     this.task.snapshotChanges().pipe(finalize(()=>{
       fileref.getDownloadURL().subscribe((url)=>{
       console.log(url)
       this.testUrl = (url);
       console.log(this.testUrl);
       this.testService.createTest(form.value.testName, form.value.testId, date, url, this.testService.completedCode, this.currentUser.id).subscribe();
       });
      
     this.uploaded = true;
     //this.testService.insertTestDetails(this.uploadingTest)
    })).subscribe();
      //this.resetForm();
   
    }
    //this.uploadingTest.name = null;
    //this.uploadingTest.id = null;
    
    
    
show(){
this.uploaded = false;
this.showTests = !this.showTests;
if(this.showTests){
this.testService.getAllTests().subscribe(tests => 
 //this.tests.forEach(test =>{
//var oldTest = test;
  
  tests.forEach(test => { 
    if (test.completedCode == 0 ){
      this.tests.push(test);
    }
  })
  //})
  );
  console.log(this.tests);
  
  //this.tests = tests);
  this.resetForm();
}
}
resetForm(){
  this.uploaded = false;
  this.testForm.reset();
  
}

  }
export interface test  {
name : string;
id : number;
date : string;
url : string;
completedCode : number;
internId? : number;
supervisorId? : number;
garderId? : number;
}