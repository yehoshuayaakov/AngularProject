import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InternFormComponent } from './components/intern-form/intern-form.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { VerificationComponent } from './components/verification/verification.component';
import { InternWelcomeComponent } from './components/intern-welcome/intern-welcome.component';
import { SupervisorsWelcomeComponent } from './components/supervisors-welcome/supervisors-welcome.component';
import { WelcomeMessageComponent } from './components/welcome-message/welcome-message.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TakePictureComponent } from './components/take-picture/take-picture.component';
import { WebcamModule } from 'ngx-webcam';
import { CameraComponent } from './camera/camera.component';
import { StartquestionareComponent } from './components/startquestionare/startquestionare.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { DetailsFormComponent } from './components/details-form/details-form.component';
import { ProfessionalDetailFormComponent } from './components/professional-detail-form/professional-detail-form.component';
import { SimulatorOverviewComponent } from './components/simulator-overview/simulator-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    InternFormComponent,
    WelcomePageComponent,
    VerificationComponent,
    InternWelcomeComponent,
    SupervisorsWelcomeComponent,
    WelcomeMessageComponent,
    TakePictureComponent,
    CameraComponent,
    StartquestionareComponent,
    LogInComponent,
    DetailsFormComponent,
    ProfessionalDetailFormComponent,
    SimulatorOverviewComponent
  ],
  imports: [
    WebcamModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
