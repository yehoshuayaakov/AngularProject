import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsFormComponent } from './components/details-form/details-form.component';
import { GetAllInternsComponent } from './components/get-all-interns/get-all-interns.component';
import { InternFormComponent } from './components/intern-form/intern-form.component';
import { InternNotFoundComponent } from './components/intern-not-found/intern-not-found.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { MoreInternInfoComponent } from './components/more-intern-info/more-intern-info.component';
import { ProfessionalDetailFormComponent } from './components/professional-detail-form/professional-detail-form.component';
import { RegisterPasswordComponent } from './components/register-password/register-password.component';
import { SimulatorOverviewComponent } from './components/simulator-overview/simulator-overview.component';
import { StartquestionareComponent } from './components/startquestionare/startquestionare.component';
import { SupervisorEntryComponent } from './components/supervisor-entry/supervisor-entry.component';
import { SupervisorFormComponent } from './components/supervisor-form/supervisor-form.component';
import { TakePictureComponent } from './components/take-picture/take-picture.component';
import { TestResultsComponent } from './components/testing/test-results/test-results.component';
import { VerificationComponent } from './components/verification/verification.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { UploadTestComponent } from './supervisors/upload-test/upload-test.component';

const routes: Routes = [
  { path: '', component: WelcomePageComponent},
  { path: 'internForm', component: InternFormComponent},
  { path: 'verification', component: VerificationComponent},
  { path: 'picture', component: TakePictureComponent},
  { path: 'startquestionare', component: StartquestionareComponent},
  { path: 'log-in', component: LogInComponent},
  { path: 'details', component: DetailsFormComponent},
  { path: 'professionalDetails', component: ProfessionalDetailFormComponent},
  { path: 'simulatorOverview', component : SimulatorOverviewComponent},
  { path: 'registerPassword', component : RegisterPasswordComponent},
  
  { path: 'supervisorForm', component : SupervisorFormComponent},
  { path: 'supervisorEntry', component : SupervisorEntryComponent},
  { path: 'getAll', component : GetAllInternsComponent},  
  { path: 'moreInternInfo', component : MoreInternInfoComponent},
  { path: 'notFound', component : InternNotFoundComponent },
  { path: 'internTests', component : TestResultsComponent},
  { path: 'uploadTests', component : UploadTestComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
