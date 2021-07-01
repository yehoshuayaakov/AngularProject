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
import { HeaderComponent } from './components/header/header.component';
import { RegisterPasswordComponent } from './components/register-password/register-password.component';
import { SupervisorFormComponent } from './components/supervisor-form/supervisor-form.component';
import { GetAllInternsComponent } from './components/get-all-interns/get-all-interns.component';
import { SupervisorEntryComponent } from './components/supervisor-entry/supervisor-entry.component';
import { MoreInternInfoComponent } from './components/more-intern-info/more-intern-info.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabase, AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { InternNotFoundComponent } from './components/intern-not-found/intern-not-found.component';
import { TestResultsComponent } from './components/testing/test-results/test-results.component';
import { UploadTestComponent } from './supervisors/upload-test/upload-test.component';
import { GradeTestsComponent } from './supervisors/grade-tests/grade-tests.component';


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
    SimulatorOverviewComponent,
    HeaderComponent,
    RegisterPasswordComponent,
    SupervisorFormComponent,
    GetAllInternsComponent,
    SupervisorEntryComponent,
    MoreInternInfoComponent,
    InternNotFoundComponent,
    TestResultsComponent,
    UploadTestComponent,
    GradeTestsComponent,
  
  ],
  imports: [
    WebcamModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveFormsModule ,
    HttpClientModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firbase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
