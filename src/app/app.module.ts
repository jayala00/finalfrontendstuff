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
import { ViewadminComponent } from './viewadmin/viewadmin.component';
import { ViewsponsorsComponent } from './viewsponsors/viewsponsors.component';
import { DriverhomepageComponent } from './driverhomepage/driverhomepage.component';
import { ManagedriveraccountComponent } from './managedriveraccount/managedriveraccount.component';
import { SponsorhomepageComponent } from './sponsorhomepage/sponsorhomepage.component';
import { ManagesponsoraccountComponent } from './managesponsoraccount/managesponsoraccount.component';
import { DriverprofileComponent } from './driverprofile/driverprofile.component';
import { AddPointsComponent } from './add-points/add-points.component';
import { EditdrivernameComponent } from './editdrivername/editdrivername.component';
import { EditdrivernamelastComponent } from './editdrivernamelast/editdrivernamelast.component';
import { EditdriverpasswordComponent } from './editdriverpassword/editdriverpassword.component';
import { EditaddressComponent } from './editaddress/editaddress.component';
import { EditidComponent } from './editid/editid.component';
import { EditemailComponent } from './editemail/editemail.component';


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
    DriverComponent,
    ViewadminComponent,
    ViewsponsorsComponent,
    DriverhomepageComponent,
    ManagedriveraccountComponent,
    SponsorhomepageComponent,
    ManagesponsoraccountComponent,
    DriverprofileComponent,
    AddPointsComponent,
    EditdrivernameComponent,
    EditdrivernamelastComponent,
    EditdriverpasswordComponent,
    EditaddressComponent,
    EditidComponent,
    EditemailComponent,

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
