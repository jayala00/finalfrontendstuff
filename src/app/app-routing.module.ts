import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { CreatedriverComponent } from './createdriver/createdriver.component';
import { CreatesponsorComponent } from './createsponsor/createsponsor.component';
import { DriverComponent } from './driver/driver.component';


const routes: Routes = [
  { path:'', redirectTo: 'login', pathMatch: 'full'},
  { path:'login', component:LoginComponent},
  { path:'admin', component:AdminComponent},
  { path:'createdriver', component:CreatedriverComponent},
  { path:'createsponsor', component:CreatesponsorComponent},
  { path:'viewdriver', component:DriverComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
