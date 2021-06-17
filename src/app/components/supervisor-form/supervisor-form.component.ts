import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { internModel } from 'src/app/model/intern.model';
import { supervisorModel } from 'src/app/model/supervisor.model';
import { InternserviceService } from 'src/app/services/internservice.service';
import { ServerService } from 'src/app/services/server.service';
import { SupervisorService } from 'src/app/services/supervisor.service';

@Component({
  selector: 'app-supervisor-form',
  templateUrl: './supervisor-form.component.html',
  styleUrls: ['./supervisor-form.component.scss']
})
export class SupervisorFormComponent implements OnInit {
  supervisor: internModel = {
    name: null,
    phonenumber: null,
    Id: null,
    citizenshipId: null,
    email : null,
    roleNumber : 199
  }
  constructor(private internService : InternserviceService, private supervisorService : SupervisorService, private router : Router, private server : ServerService) { 
    this.internService.currentInternUser = this.supervisor;
  }

  ngOnInit(): void {
  }
  createSupervisor(s: internModel){
    console.log(s);
    //this.supervisorService.isSupervisor = true;
    //this.server.registerIntern( this.supervisor.name, this.supervisor.phonenumber, this.supervisor.Id, this.supervisor.citizenshipId, this.supervisor.email )
    //this.intern = i;
    //console.log(i);
    this.internService.changeCurrentUser(s);
    //console.log(s);
    
    //this.server.registerUser(s).subscribe(data=> {
      //console.log(data);
    //});
    //this.supervisorService.changeCurrentUser(s);
    this.router.navigate(["/registerPassword"]);
    
  }

}
