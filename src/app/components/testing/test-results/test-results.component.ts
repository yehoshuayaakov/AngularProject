import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { internModel } from 'src/app/model/intern.model';
import { InternserviceService } from 'src/app/services/internservice.service';

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
constructor(private internService : InternserviceService, private fb : AngularFireDatabase, private as : AngularFireStorage) { 
  this.currentUser = this.internService.currentInternUser;
console.log(this.currentUser);

}

  ngOnInit(): void {
  
  }
upload($event){
this.path = $event.target.files[0];
}
uploadFile(){
  
this.task = this.as.upload('/files'+Math.random()+this.path, this.path);
this.uploadProgress = this.task.percentageChanges();
}
}
