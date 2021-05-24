import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InternFormComponent } from './components/intern-form/intern-form.component';
import { StartquestionareComponent } from './components/startquestionare/startquestionare.component';
import { TakePictureComponent } from './components/take-picture/take-picture.component';
import { VerificationComponent } from './components/verification/verification.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';

const routes: Routes = [
  { path: '', component: WelcomePageComponent},
  { path: 'internForm', component: InternFormComponent},
  { path: 'verification', component: VerificationComponent},
  { path: 'picture', component: TakePictureComponent},
  { path: 'startquestionare', component: StartquestionareComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
