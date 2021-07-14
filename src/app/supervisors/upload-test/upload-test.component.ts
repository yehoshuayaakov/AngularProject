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
  uploaded: boolean = false;
  uploadState;
  currentUser: internModel;
  uploadProgress : Observable<number>;
  task: AngularFireUploadTask;
  testUrl : string;
  currentInput : any;
  uploadingTest : test = {
    name: null,
    id : null,
    date : null,
    testUrl : null,
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
    console.log(this.uploaded + "ngOninit");
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
  }
  upload($event){
    console.log(this.uploaded + "uploadfunction");
    
    this.path = $event.target.files[0];
    console.log(this.path);
    this.uploaded = false;
    this.currentInput = $event.target.files[0].name;
    }
    uploadFile(form : FormGroup){
      console.log(form.value);
      console.log(this.uploaded+ " after sending form");
          console.log(form.value.testName + " upload function");

//      const DATE_TIME_FORMAT = 'YYYY-MM-DDTHH:mm'; 
///let _now: Moment;
//_now = moment(new Date(), DATE_TIME_FORMAT);
      var date = new Date().toLocaleDateString();
      //this.addLatestTest(form, date);
    this.uploadingTest.date = date;
    this.uploadingTest.name = form.value.testName;
    
    this.uploadingTest.id = form.value.testId;
    this.uploadingTest.testUrl = form.value.file;
    this.tests.push(this.uploadingTest);
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
       this.testForm.reset();
       this.currentInput = null;
      });
      
     this.uploaded = true;
     //this.testService.insertTestDetails(this.uploadingTest)
    })).subscribe();
      //this.resetForm();
   
    }
    //this.uploadingTest.name = null;
    //this.uploadingTest.id = null;
    
addLatestTest(form : FormGroup, date : string){
  var test : test;
  test.name = form.value.testName;
  test.id = form.value.testId;
  test.date = date;
  test.testUrl = form.value.file;
  this.tests.push(test);
}
    
show(){
this.uploaded = false;
this.showTests = !this.showTests;
if(this.showTests){

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
testUrl? : string;
grade?: number;
completedCode? : number;
internId? : number;
supervisorId? : number;
graderId? : number;
}