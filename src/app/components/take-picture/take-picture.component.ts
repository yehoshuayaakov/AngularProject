import { Component, OnInit } from '@angular/core';
import { WebcamImage} from 'ngx-webcam';
import { Subject, Observable} from 'rxjs';
import { InternserviceService } from 'src/app/services/internservice.service';
@Component({
  selector: 'app-take-picture',
  templateUrl: './take-picture.component.html',
  styleUrls: ['./take-picture.component.scss']
})
export class TakePictureComponent implements OnInit {
  title = 'gfgangularwebcam';
  
  public webcamImage: WebcamImage = null;
  private trigger: Subject<void> = new Subject<void>();
  triggerSnapshot(): void {
   this.trigger.next();
  }
  retakeSnapshot(): void {
    this.webcamImage = null;
    
   }
  handleImage(webcamImage: WebcamImage): void {
   console.info('Saved webcam image', webcamImage);
   this.webcamImage = webcamImage;
  }
   
  public get triggerObservable(): Observable<void> {
   return this.trigger.asObservable();
  }
  constructor(private internService : InternserviceService) { 
    internService.currentInternUser.image = this.webcamImage;
  }

  ngOnInit(): void {
  }
changeHeader(){
  this.internService.changeHeader();
}
}
