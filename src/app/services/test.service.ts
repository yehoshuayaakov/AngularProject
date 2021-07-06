import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { test } from '../supervisors/upload-test/upload-test.component';
import { AngularFireStorage } from '@angular/fire/storage';
@Injectable({
  providedIn: 'root'
})
export class TestService {
  baseUrl = 'http://localhost:3000/';
completedCode : number;
testDetailsList: AngularFireList<any>;
  constructor(private fireDb : AngularFireDatabase, private http : HttpClient, private storage : AngularFireStorage ) { }

  ngOnInit(): void {
    
  }

  getTestDetails(){
    this.testDetailsList = this.fireDb.list("TestDetails");
  }
insertTestDetails(testDetails){
  //this.testDetailsList.push(testDetails);
  }
createTest(name : string, id : number, date : string, url : string, completedCode : number, supervisorId : string) : Observable<any>{ 
console.log("create test function");
console.log(name);

    return this.http.post(this.baseUrl + "tests/create", {name : name, id : id, date : date, testUrl : url, completedCode : completedCode, supervisorId : supervisorId})
  }
  getAllTests() : Observable<any>{
    return this.http.get(this.baseUrl + "tests/getAll");
  }
  seeTests(){
  
  }
  submitTestforGrading(name : string, id : number, date : string, url : string, completedCode : number, internId : string) : Observable<any>{
    return this.http.post(this.baseUrl + "tests/create", {name : name, id : id, date : date, testUrl : url, completedCode : completedCode, internId : internId})
  }
}