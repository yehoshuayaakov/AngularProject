import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
@Injectable({
  providedIn: 'root'
})
export class TestService {


testDetailsList: AngularFireList<any>;
  constructor(private fireDb : AngularFireDatabase ) { }

  ngOnInit(): void {
  }

  getTestDetails(){
    this.testDetailsList = this.fireDb.list("TestDetails");
  }
insertTestDetails(testDetails){
  this.testDetailsList.push(testDetails);
  }
}