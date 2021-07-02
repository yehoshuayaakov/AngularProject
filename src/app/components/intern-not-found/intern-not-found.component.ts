import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { internModel } from 'src/app/model/intern.model';
import { InternserviceService } from 'src/app/services/internservice.service';
import { ServerService } from 'src/app/services/server.service';

@Component({
  selector: 'app-intern-not-found',
  templateUrl: './intern-not-found.component.html',
  styleUrls: ['./intern-not-found.component.scss']
})
export class InternNotFoundComponent implements OnInit {
interns : internModel[] = [];
searchedIntern: string;
Intern : internModel []= [];
foundIntern : boolean = false;
intern :internModel;
  constructor(private server : ServerService, private internService : InternserviceService, private router : Router) {
    this.interns = internService.internList;
   }

  ngOnInit(): void {
  }
  findIntern(){
//this.server.getInternsWithToken().subscribe(interns => this.interns = interns);
  console.log(this.interns);
  console.log(this.searchedIntern);
  
  this.interns = this.interns.filter(intern=> 
       
    intern.name === this.searchedIntern);
   console.log(this.interns);
   if (this.interns.length ==0){
    console.log("nothing in list");
    this.router.navigate(['/notFound']);
    //this.notFound = true;
  
  
  }
    else {
      console.log("found intern");
      this.foundIntern = true;
      console.log(this.interns[0].name);
      
    }

    console.log("findintern function");
    //console.log(this.searchedIntern);
    
    
      console.log(this.Intern);
     
 
  }
  showAllDetails(email : string){
    this.intern = this.interns.find(item=> item.email === email);
     console.log(this.intern.personalDetails.academicInstitution);
     this.foundIntern = !this.foundIntern;
     this.internService.chosenIntern = this.intern;
     
     this.router.navigate(['/moreInternInfo']);
   }
}
