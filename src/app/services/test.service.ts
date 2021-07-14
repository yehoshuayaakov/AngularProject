import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { test } from '../supervisors/upload-test/upload-test.component';
import { AngularFireStorage } from '@angular/fire/storage';
import { internModel } from '../model/intern.model';
import { InternserviceService } from './internservice.service';
@Injectable({
  providedIn: 'root'
})
export class TestService {
  baseUrl = 'http://localhost:3000/';
completedCode : number;
currentUser: internModel;
testDetailsList: AngularFireList<any>;
tests : test[]=[];
  constructor(private internService  : InternserviceService, private fireDb : AngularFireDatabase, private http : HttpClient, private storage : AngularFireStorage ) { 
    this.currentUser = internService.currentInternUser;
  }

  ngOnInit(): void {
    
  }

  getTestDetails(){
    this.testDetailsList = this.fireDb.list("TestDetails");
  }
insertTestDetails(testDetails){
  //this.testDetailsList.push(testDetails);
  }
createTest(name : string, id : number, date : string, url : string, completedCode : number, supervisorId : number) : Observable<any>{ 
console.log("create test function");
console.log(name);

    return this.http.post(this.baseUrl + "tests/create", {name : name, id : id, date : date, testUrl : url, completedCode : completedCode, supervisorId : supervisorId})
  }
  getAllTests() : Observable<any>{
    return this.http.get(this.baseUrl + "tests/getAll");
  }
  seeTests(){
  
  }
  submitTestforGrading(name : string, id : number, date : string, url : String, completedCode : number, internId : number) : Observable<any>{
    return this.http.post(this.baseUrl + "tests/create", {name : name, id : id, date : date, testUrl : url, completedCode : completedCode, internId : internId})
  }
  addGradedTest(test: test): Observable<any>{
    var completedCode = 2;
    return this.http.put(this.baseUrl + "tests/" + test.id + "/" + test.internId,{grade : test.grade, completedCode : 2, graderId : this.currentUser.id});
  }
}