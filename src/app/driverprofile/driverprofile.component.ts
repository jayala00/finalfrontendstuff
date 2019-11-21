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

  drivers: DriverProfile[];

  constructor(private router: Router, private driverService: DriverserviceService) { }

  email:string = 'dr@fakeemail.com';

  ngOnInit() {
    this.driverService.getDriverProfile(this.email)
      .subscribe( data => {
        this.drivers = data;
        console.log("data :" + data);
        var sample = JSON.stringify(this.drivers);
      });
  };

}
