import { Component, OnInit } from '@angular/core';
import { Driver } from '../driver';
import { Router } from '@angular/router';
import { DriverserviceService } from '../service/driverservice.service';

@Component({
  selector: 'app-sponsorviewsdrivers',
  templateUrl: './sponsorviewsdrivers.component.html',
  styleUrls: ['./sponsorviewsdrivers.component.css']
})
export class SponsorviewsdriversComponent implements OnInit {
  drivers: Driver[];

  constructor(private router: Router, private driverService: DriverserviceService) {

  }

  ngOnInit() { 
    this.driverService.getUsers()
      .subscribe( data => {
        this.drivers = data;
        console.log("data :" + data);
        var sample = JSON.stringify(this.drivers);
      });
  };

  deleteUser(user: Driver): void {
    this.driverService.deleteUser(user.id)
      .subscribe( data => {
        this.drivers = this.drivers.filter(u => u !== user);
      })
  };

  addPointsPage(user: Driver): void {
    this.router.navigate(['/add-points']);
  }

  onLogout(){
    localStorage.removeItem('token')
    this.router.navigate(['/actuallogin'])
  }

  onCancel(){
    this.router.navigate(['/sponsorhomepage'])
  }

}
