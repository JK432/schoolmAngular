import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TokenInterceptor } from './helpers/token.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { UNavComponent } from './components/u-nav/u-nav.component';
import { StudentdetailsComponent } from './components/studentdetails/studentdetails.component';
import { BadRequestInterceptor } from './helpers/bad-request.interceptor';
import { AlertComponent } from './components/alert/alert.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SmarkpanelComponent } from './components/studentdetails/smarkpanel/smarkpanel.component';
import { SdetailsComponent } from './components/studentdetails/sdetails/sdetails.component';
import { ANavComponent } from './components/a-nav/a-nav.component';
import { SubjectlistComponent } from './components/subjectlist/subjectlist.component';
import { StudentlistComponent } from './components/studentlist/studentlist.component';
import { SubbjectnameComponent } from './components/studentdetails/subbjectname/subbjectname.component';
import { AvgmarkComponent } from './components/dashboard/avgmark/avgmark.component';

@
NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UNavComponent,
    StudentdetailsComponent,
    AlertComponent,
    DashboardComponent,
    SmarkpanelComponent,
    SdetailsComponent,
    ANavComponent,
    SubjectlistComponent,
    StudentlistComponent,
    SubbjectnameComponent,
    AvgmarkComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BadRequestInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
