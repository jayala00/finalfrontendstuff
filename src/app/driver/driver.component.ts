import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Driver } from '../driver';
import { DriverserviceService } from '../service/driverservice.service';

@Component({
  selector: 'app-user',
  templateUrl: './driver.component.html',
  styles: []
})
export class DriverComponent implements OnInit {

  drivers: Driver[];

  constructor(private router: Router, private driverService: DriverserviceService) {

  }

  ngOnInit() { 
    this.driverService.getUsers()
      .subscribe( data => {
        this.drivers = data;
      });
  };

  deleteUser(user: Driver): void {
    this.driverService.deleteUser(user)
      .subscribe( data => {
        this.drivers = this.drivers.filter(u => u !== user);
      })
  };

}
