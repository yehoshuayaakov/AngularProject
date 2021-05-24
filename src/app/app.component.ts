import { Component } from '@angular/core';
import { internModel } from './model/intern.model';
import { InternserviceService } from './services/internservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularProject';
  isIntern : boolean = false;
  currentUser: internModel;
  constructor(private internservice: InternserviceService){
   
   this.currentUser = internservice.currentInternUser;
  }
  ngOnInit(): void {
    this.isIntern = this.internservice.isIntern;
  }
}
