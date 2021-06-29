import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { internModel } from 'src/app/model/intern.model';
import { InternserviceService } from 'src/app/services/internservice.service';
import { ServerService } from 'src/app/services/server.service';


@Component({
  selector: 'app-get-all-interns',
  templateUrl: './get-all-interns.component.html',
  styleUrls: ['./get-all-interns.component.scss']
})
export class GetAllInternsComponent implements OnInit {
interns : any [] = [];
selectedInterns :any [] = [];
supervisors : any [] = [];
showInterns : boolean = false;
showDetails : boolean = false;
chosenIntern : internModel;
name: string;
headerForAll: boolean;
searchedIntern: string;
notFound : boolean = false;
token;
@Input() intern : internModel;
  constructor(private router : Router, private server : ServerService, private internService : InternserviceService) {
    this.token = server.token;
  
      
      
      
      //this.interns = internList ;
      this.showInterns = true;
      this.headerForAll=true;
      //internService.internList = this.interns;
      console.log(this.server.token);
          
  
   }

  ngOnInit(): void {
    this.server.getInternsWithToken().subscribe(internList=> {
      console.log("getting List");
      console.log(internList);
      internList.forEach(item => {
        if (item.roleNumber < 100){
          this.interns.push(item);
        }
        else if (item.roleNumber>99){
          this.supervisors.push(item);
        }
      });
  })
  this.internService.internList = this.interns;
  console.log("internlist");
      console.log(this.interns);
}
/*getAll(){
  this.server.getAllInterns().subscribe(internList=> {
    console.log("getting List");
    console.log(internList);
    this.interns = internList ;
    this.showInterns = true;
        })
}*/
showAllDetails(email : string){
 this.chosenIntern = this.interns.find(item=> item.email === email);
  console.log(this.chosenIntern.personalDetails.academicInstitution);
  this.showDetails = !this.showDetails;
  this.internService.chosenIntern = this.chosenIntern;
  
  this.router.navigate(['/moreInternInfo']);
}
findIntern(){
  console.log("findintern function");
  
  this.interns = this.interns.filter(intern=> 
     
    intern.name === this.searchedIntern);
if (this.interns.length==0){
  console.log("nothing in list");
  this.router.navigate(['/notFound']);
  this.notFound = true;


}
  else {
    console.log("found intern");
    
    //this.headerForAll = true;
    console.log(this.interns);
    this.headerForAll = false;
    this.notFound = false;
  }

  console.log(this.interns);
  this.headerForAll = false;
  
}
goBack(){
  this.server.getInternsWithToken().subscribe(internList=> {
    console.log("getting List");
    console.log(internList);
    internList.forEach(item => {
      if (item.roleNumber < 100){
        this.interns.push(item);
      }
    });
  
    //this.interns = internList ;
    this.showInterns = true;
    this.internService.internList = this.interns;
    this.headerForAll = true;
        })
//this.router.navigate(['/getAll']);
}
tryAgain(){
  this.server.getInternsWithToken().subscribe(internList=> {
    console.log("getting List");
    console.log(internList);
    internList.forEach(item => {
      if (item.roleNumber < 100){
        this.interns.push(item);
      }
    });
  })
  this.findIntern();
  }
}
