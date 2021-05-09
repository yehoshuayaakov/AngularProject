import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InternFormComponent } from './components/intern-form/intern-form.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { VerificationComponent } from './components/verification/verification.component';

@NgModule({
  declarations: [
    AppComponent,
    InternFormComponent,
    WelcomePageComponent,
    VerificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
