import { Component, OnInit } from '@angular/core';
import { Driver } from '../driver';
import { DriverserviceService } from '../service/driverservice.service';
import { Router } from '@angular/router';
import { AdminServiceService } from '../service/admin-service.service';
import { Admin } from '../admin';
import { Sponsor } from '../sponsor';
import { SponsorserviceService } from '../service/sponsorservice.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  driver: Driver = new Driver();
  admin: Admin = new Admin();
  sponsor: Sponsor = new Sponsor();

  type:string;
  firstname:string
  lastname:string
  password:string
  email:string

  constructor(private router:Router, private driverService: DriverserviceService, private adminService: AdminServiceService, private sponsorService: SponsorserviceService) { }

  ngOnInit() {
  }

  onSignUp() {

    if(this.type == "Driver") {
      console.log("driver match")
      this.driver.firstname = this.firstname
      this.driver.lastname = this.lastname
      this.driver.email = this.email
      this.driver.password = this.password
      this.driverService.registerDriver(this.driver)
    .subscribe( data => {
      alert('Registered successfully');
    })
    this.router.navigate(['/actuallogin'])
    } else if(this.type == "Admin") {
      console.log("admin match")
      this.admin.firstname = this.firstname
      this.admin.lastname = this.lastname
      this.admin.email = this.email
      this.admin.password = this.email
      this.adminService.registerAdmin(this.admin)
    .subscribe( data => {
      alert('Registered successfully');
    })
    this.router.navigate(['/actuallogin'])

    } else if(this.type == "Sponsor") {
      console.log("sponsor match")
      this.sponsor.name = this.firstname + this.lastname
      this.sponsor.email = this.email
      this.sponsor.password = this.password
      this.sponsorService.registerSponsor(this.sponsor)
    .subscribe( data => {
      alert('Registered successfully');
    })
    this.router.navigate(['/actuallogin'])
    }
  }

  onCancel(){
    this.router.navigate(['/actuallogin'])
  }

}
