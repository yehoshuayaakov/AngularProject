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
  
  uploadingTest : test = {
    name: null,
    id : null,
    date : null,
    file : null
  };
  tests : test[]= [];
  testForm : FormGroup ;
  constructor(private testService : TestService, private internService : InternserviceService, private fb : AngularFireDatabase, private as : AngularFireStorage) { }

  ngOnInit(): void {
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
    this.uploadingTest.id = form.value.testId;
    this.uploadingTest.file = form.value.file;
    this.task = this.as.upload('/tests/'+this.uploadingTest.name , this.path);
    this.uploadProgress = this.task.percentageChanges();
    this.tests.push(this.uploadingTest);
    console.log(this.uploadingTest);
     this.task.snapshotChanges().pipe(finalize(()=>{
     this.uploaded = true;
     this.testService.insertTestDetails(this.uploadingTest)})).subscribe();
    

    
    }
    //this.uploadingTest.name = null;
    //this.uploadingTest.id = null;
    
    
    
show(){
this.showTests = true;
}
  }
export interface test  {
name : string;
id : number;
date : string;
file :File;
}