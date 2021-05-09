import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InternFormComponent } from './components/intern-form/intern-form.component';
import { VerificationComponent } from './components/verification/verification.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';

const routes: Routes = [
  { path: '', component: WelcomePageComponent},
  { path: 'internForm', component: InternFormComponent},
  { path: 'verification', component: VerificationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
