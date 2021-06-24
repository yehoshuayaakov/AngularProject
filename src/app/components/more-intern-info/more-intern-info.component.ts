import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { internModel } from 'src/app/model/intern.model';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { InternserviceService } from 'src/app/services/internservice.service';

@Component({
  selector: 'app-more-intern-info',
  templateUrl: './more-intern-info.component.html',
  styleUrls: ['./more-intern-info.component.scss']
})
export class MoreInternInfoComponent implements OnInit {
intern: any;
  constructor(private internService : InternserviceService, private router : Router, private authentification : AuthentificationService) { 
    this.intern = internService.chosenIntern;
  }

  ngOnInit(): void {
  }
goBack(){
  
this.router.navigate(['/getAll']);

}
}
