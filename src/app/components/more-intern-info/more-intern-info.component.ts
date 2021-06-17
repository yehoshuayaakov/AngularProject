import { Component, OnInit } from '@angular/core';
import { internModel } from 'src/app/model/intern.model';
import { InternserviceService } from 'src/app/services/internservice.service';

@Component({
  selector: 'app-more-intern-info',
  templateUrl: './more-intern-info.component.html',
  styleUrls: ['./more-intern-info.component.scss']
})
export class MoreInternInfoComponent implements OnInit {
intern: any;
  constructor(private internService : InternserviceService) { 
    this.intern = internService.chosenIntern;
  }

  ngOnInit(): void {
  }

}
