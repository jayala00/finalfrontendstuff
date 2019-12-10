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
import { RegisterUserComponent } from './register-user/register-user.component';
import { ApplySponsorComponent } from './apply-sponsor/apply-sponsor.component';
import { ShopCatalogComponent } from './shop-catalog/shop-catalog.component';
import { SponsorprofileComponent } from './sponsorprofile/sponsorprofile.component';
import { EditsponsornameComponent } from './editsponsorname/editsponsorname.component';
import { EditsponsorpasswordComponent } from './editsponsorpassword/editsponsorpassword.component';
import { EditsponsoraddressComponent } from './editsponsoraddress/editsponsoraddress.component';
import { EditsponsoremailComponent } from './editsponsoremail/editsponsoremail.component';
import { EditsponsoridComponent } from './editsponsorid/editsponsorid.component';
import { EditadminidComponent } from './editadminid/editadminid.component';
import { EditadminfirstnameComponent } from './editadminfirstname/editadminfirstname.component';
import { EditadminlastnameComponent } from './editadminlastname/editadminlastname.component';
import { EditadminpasswordComponent } from './editadminpassword/editadminpassword.component';
import { EditadminemailComponent } from './editadminemail/editadminemail.component';
import { ManageadminaccountComponent } from './manageadminaccount/manageadminaccount.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';


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
    RegisterUserComponent,
    ApplySponsorComponent,
    ShopCatalogComponent,
    SponsorprofileComponent,
    EditsponsornameComponent,
    EditsponsorpasswordComponent,
    EditsponsoraddressComponent,
    EditsponsoremailComponent,
    EditsponsoridComponent,
    EditadminidComponent,
    EditadminfirstnameComponent,
    EditadminlastnameComponent,
    EditadminpasswordComponent,
    EditadminemailComponent,
    ManageadminaccountComponent,
    ResetpasswordComponent,

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
