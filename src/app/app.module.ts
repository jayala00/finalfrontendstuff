import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { CreatedriverComponent } from './createdriver/createdriver.component';

import { ActualloginComponent } from './actuallogin/actuallogin.component';
import { DriverloginComponent } from './driverlogin/driverlogin.component';
import { SponsorloginComponent } from './sponsorlogin/sponsorlogin.component';
import { CreateadminComponent } from './createadmin/createadmin.component';

import { CreatesponsorComponent } from './createsponsor/createsponsor.component';
import { DriverComponent } from './driver/driver.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    CreatedriverComponent,
    CreatesponsorComponent,
    ActualloginComponent,
    DriverloginComponent,
    SponsorloginComponent,
    CreateadminComponent,
    CreatesponsorComponent,
    DriverComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
