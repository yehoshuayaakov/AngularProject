import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsFormComponent } from './components/details-form/details-form.component';
import { InternFormComponent } from './components/intern-form/intern-form.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { ProfessionalDetailFormComponent } from './components/professional-detail-form/professional-detail-form.component';
import { StartquestionareComponent } from './components/startquestionare/startquestionare.component';
import { TakePictureComponent } from './components/take-picture/take-picture.component';
import { VerificationComponent } from './components/verification/verification.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';

const routes: Routes = [
  { path: '', component: WelcomePageComponent},
  { path: 'internForm', component: InternFormComponent},
  { path: 'verification', component: VerificationComponent},
  { path: 'picture', component: TakePictureComponent},
  { path: 'startquestionare', component: StartquestionareComponent},
  { path: 'log-in', component: LogInComponent},
  { path: 'details', component: DetailsFormComponent},
  { path: 'professionalDetails', component: ProfessionalDetailFormComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
