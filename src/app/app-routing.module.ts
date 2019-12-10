import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { CreatedriverComponent } from './createdriver/createdriver.component';
import { ActualloginComponent } from './actuallogin/actuallogin.component';
import { DriverloginComponent } from './driverlogin/driverlogin.component';
import { SponsorloginComponent } from './sponsorlogin/sponsorlogin.component';
import { CreateadminComponent } from './createadmin/createadmin.component';
import { DriverComponent } from './driver/driver.component';
import { CreatesponsorComponent } from './createsponsor/createsponsor.component';
import { ViewadminComponent } from './viewadmin/viewadmin.component';
import { ViewsponsorsComponent } from './viewsponsors/viewsponsors.component';
import { DriverhomepageComponent } from './driverhomepage/driverhomepage.component';
import { ManagedriveraccountComponent } from './managedriveraccount/managedriveraccount.component';
import { SponsorhomepageComponent } from './sponsorhomepage/sponsorhomepage.component';
import { ManagesponsoraccountComponent } from './managesponsoraccount/managesponsoraccount.component';
import { DriverprofileComponent } from './driverprofile/driverprofile.component';
import { AddPointsComponent } from './add-points/add-points.component';
import { EditaddressComponent } from './editaddress/editaddress.component';
import { EditdrivernameComponent } from './editdrivername/editdrivername.component';
import { EditdrivernamelastComponent } from './editdrivernamelast/editdrivernamelast.component';
import { EditdriverpasswordComponent } from './editdriverpassword/editdriverpassword.component';
import { EditemailComponent } from './editemail/editemail.component';
import { EditidComponent } from './editid/editid.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ApplySponsorComponent } from './apply-sponsor/apply-sponsor.component';
import { ShopCatalogComponent } from './shop-catalog/shop-catalog.component';
import { SponsorprofileComponent } from './sponsorprofile/sponsorprofile.component';
import { EditsponsornameComponent } from './editsponsorname/editsponsorname.component';
import { EditsponsoraddressComponent } from './editsponsoraddress/editsponsoraddress.component';
import { EditsponsorpasswordComponent } from './editsponsorpassword/editsponsorpassword.component';
import { EditsponsoremailComponent } from './editsponsoremail/editsponsoremail.component';
import { EditsponsoridComponent } from './editsponsorid/editsponsorid.component';
import { EditadminemailComponent } from './editadminemail/editadminemail.component';
import { EditadminfirstnameComponent } from './editadminfirstname/editadminfirstname.component';
import { EditadminlastnameComponent } from './editadminlastname/editadminlastname.component';
import { EditadminpasswordComponent } from './editadminpassword/editadminpassword.component';
import { EditadminidComponent } from './editadminid/editadminid.component';
import { ManageadminaccountComponent } from './manageadminaccount/manageadminaccount.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { CatalogComponent } from './catalog/catalog.component';
import { SponsorviewsdriversComponent } from './sponsorviewsdrivers/sponsorviewsdrivers.component';

const routes: Routes = [
  { path:'', redirectTo: 'actuallogin', pathMatch: 'full'},
  { path:'actuallogin', component:ActualloginComponent},
  { path:'login', component:LoginComponent},
  { path:'admin', component:AdminComponent},
  { path:'createdriver', component:CreatedriverComponent},
  { path:'driverlogin', component:DriverloginComponent},
  { path:'sponsorlogin', component:SponsorloginComponent},
  { path:'createadmin', component:CreateadminComponent},
  { path:'viewdrivers', component:DriverComponent},
  { path:'createsponsor', component:CreatesponsorComponent},
  { path:'viewadmins', component:ViewadminComponent },
  { path: 'viewsponsors', component:ViewsponsorsComponent }, 
  { path: 'driverhomepage', component:DriverhomepageComponent},
  { path: 'managedriveraccount', component:ManagedriveraccountComponent},
  { path: 'sponsorhomepage', component:SponsorhomepageComponent},
  { path: 'add-points', component:AddPointsComponent},
  { path: 'managesponsoraccount', component:ManagesponsoraccountComponent},
  { path: 'viewdriverprofile', component:DriverprofileComponent},
  { path: 'editaddress', component:EditaddressComponent},
  { path: 'editdrivername', component:EditdrivernameComponent},
  { path: 'editdrivernamelast', component:EditdrivernamelastComponent},
  { path: 'editdriverpassword', component:EditdriverpasswordComponent},
  { path: 'editemail', component:EditemailComponent},
  { path: 'editid', component:EditidComponent},
  { path: 'register', component:RegisterUserComponent},
  { path: 'applysponsor', component:ApplySponsorComponent},
  { path: 'shopcatalog', component:ShopCatalogComponent},
  { path: 'viewsponsorprofile', component:SponsorprofileComponent},
  { path: 'editsponsorname', component:EditsponsornameComponent},
  { path: 'editsponsoraddress', component:EditsponsoraddressComponent},
  { path: 'editsponsorpassword', component:EditsponsorpasswordComponent},
  { path: 'editsponsoremail', component:EditsponsoremailComponent},
  { path: 'editsponsorid', component:EditsponsoridComponent},
  { path: 'editadminemail', component:EditadminemailComponent},
  { path: 'editadminfirstname', component:EditadminfirstnameComponent},
  { path: 'editadminlastname', component:EditadminlastnameComponent},
  { path: 'editadminpassword', component:EditadminpasswordComponent},
  { path: 'editadminid', component:EditadminidComponent},
  { path: 'manageadminaccount', component:ManageadminaccountComponent},
  { path: 'resetpassword', component:ResetpasswordComponent},
  { path: 'catalog', component:CatalogComponent},
  { path: 'sponsorviewsdrivers', component:SponsorviewsdriversComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
