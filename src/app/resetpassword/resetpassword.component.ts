import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService } from '../service/adminservice.service';
import { Driver } from '../driver';
import { Admin } from '../admin';
import { Sponsor } from '../sponsor';
import { DriverserviceService } from '../service/driverservice.service';
import { SponsorserviceService } from '../service/sponsorservice.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  driver: Driver = new Driver();
  admin: Admin = new Admin();
  sponsor: Sponsor = new Sponsor();

  password:string
  email:string
  type:string
  confirmpassword:string

  constructor(private router: Router,  private driverService: DriverserviceService, private adminService: AdminserviceService, private sponsorService: SponsorserviceService) { }

  ngOnInit() {
  }

  onSubmit(){
    if (this.password != this.confirmpassword){
      location.reload()
    }

    if (this.type == "Admin"){
      this.adminService.getAdmin(this.email)
     .subscribe( data => {
       this.admin = data;
     })
     this.admin.password = this.password

     this.adminService.changeAdminPassword(this.admin, this.email).subscribe((reponse)=>{
      console.log(reponse);
     }); 

     this.router.navigate(['/login'])
    }
    if (this.type == "Driver"){
      this.driverService.getDriver(this.email)
     .subscribe( data => {
       this.driver = data;
     })
     this.driver.password = this.password

     this.driverService.changeDriverPassword(this.driver, this.email).subscribe((reponse)=>{
      console.log(reponse);
     }); 

     this.router.navigate(['/driverlogin'])
    }
    if (this.type == "Sponsor"){
      this.sponsorService.getSponsor(this.email)
     .subscribe( data => {
       this.sponsor = data;
     })
     this.sponsor.password = this.password

     this.sponsorService.changeSponsorPassword(this.sponsor, this.email).subscribe((reponse)=>{
      console.log(reponse);
     }); 

     this.router.navigate(['/sponsorlogin'])
    }

  }

}
