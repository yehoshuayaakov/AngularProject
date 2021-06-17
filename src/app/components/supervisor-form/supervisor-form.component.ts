import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { supervisorModel } from 'src/app/model/supervisor.model';
import { ServerService } from 'src/app/services/server.service';
import { SupervisorService } from 'src/app/services/supervisor.service';

@Component({
  selector: 'app-supervisor-form',
  templateUrl: './supervisor-form.component.html',
  styleUrls: ['./supervisor-form.component.scss']
})
export class SupervisorFormComponent implements OnInit {
  supervisor: supervisorModel = {
    Name: null,
    Phonenumber: null,
    Id: null,
    CitizenshipId: null,
    email : null,
    //roleNumber : 199
  }
  constructor(private supervisorService : SupervisorService, private router : Router, private server : ServerService) { }

  ngOnInit(): void {
  }
  createSupervisor(s: supervisorModel){
    console.log("hello");
    this.supervisorService.isSupervisor = true;
    this.server.registerIntern( this.supervisor.Name, this.supervisor.Phonenumber, this.supervisor.Id, this.supervisor.CitizenshipId, this.supervisor.email )
    //this.intern = i;
    //console.log(i);
    //this.internService.addIntern(i);
    this.supervisorService.changeCurrentUser(s);
    this.router.navigate(["/registerPassword"]);
    
  }

}
