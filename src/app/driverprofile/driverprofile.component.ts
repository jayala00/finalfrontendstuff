import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DriverserviceService } from '../service/driverservice.service';
import { Driver } from '../driver';
import { DriverProfile } from '../driver-profile';

@Component({
  selector: 'app-driverprofile',
  templateUrl: './driverprofile.component.html',
  styleUrls: ['./driverprofile.component.css']
})
export class DriverprofileComponent implements OnInit {

  drivers: Driver = new Driver();

  constructor(private router: Router, private driverService: DriverserviceService) { }

  email:string = 'driverone@app.com';

  ngOnInit() {
    this.driverService.getDriver(localStorage.getItem('token'))
      .subscribe( data => {
        this.drivers = data;
        console.log("data :" + data);
        var sample = JSON.stringify(this.drivers);
      });
  };

  onLogout(){
    localStorage.removeItem('token')
    this.router.navigate(['/actuallogin'])
  }

  onCancel(){
    this.router.navigate(['/driverhomepage'])
  }

}
