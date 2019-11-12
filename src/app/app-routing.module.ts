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



const routes: Routes = [
  { path:'', redirectTo: 'actuallogin', pathMatch: 'full'},
  { path:'actuallogin', component:ActualloginComponent},
  { path:'login', component:LoginComponent},
  { path:'admin', component:AdminComponent},
  { path:'createdriver', component:CreatedriverComponent},

  { path:'driverlogin', component:DriverloginComponent},
  { path:'sponsorlogin', component:SponsorloginComponent},
  { path:'createadmin', component:CreateadminComponent},
  { path:'createsponsor', component:CreatesponsorComponent},


  { path:'viewdriver', component:DriverComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
