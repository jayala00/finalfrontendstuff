import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DriverserviceService } from '../service/driverservice.service';
import { Driver } from '../driver';

@Component({
  selector: 'app-managedriveraccount',
  templateUrl: './managedriveraccount.component.html',
  styleUrls: ['./managedriveraccount.component.css']
})
export class ManagedriveraccountComponent implements OnInit {

  driver: Driver = new Driver();

  constructor(private router: Router, private driverService: DriverserviceService) { }

  ngOnInit() {
    this.driverService.getDriver(localStorage.getItem('token'))
      .subscribe( data => {
        this.driver = data;
        console.log("data :" + data);
        var sample = JSON.stringify(this.driver);
      });
  }

  onLogout(){
    localStorage.removeItem('token')
    this.router.navigate(['/actuallogin'])
  }

  onCancel(){
    this.router.navigate(['/driverhomepage'])
  }


}
