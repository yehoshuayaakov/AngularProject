import { Component, OnInit } from '@angular/core';
import { internModel } from 'src/app/model/intern.model';
import { InternserviceService} from 'src/app/services/internservice.service';

@Component({
  selector: 'app-startquestionare',
  templateUrl: './startquestionare.component.html',
  styleUrls: ['./startquestionare.component.scss']
})
export class StartquestionareComponent implements OnInit {
currentUser: internModel;
  constructor(internservice: InternserviceService) {
    this.currentUser = internservice.currentInternUser;
    this.currentUser.Firstname = internservice.getFirstName();
   }

  ngOnInit(): void {
  }

}
