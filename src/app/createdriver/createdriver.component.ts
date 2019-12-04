import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Driver } from '../driver';
import { DriverserviceService } from '../service/driverservice.service';

@Component({
  selector: 'app-createdriver',
  templateUrl: './createdriver.component.html',
  styleUrls: ['./createdriver.component.css']
})
export class CreatedriverComponent implements OnInit {

  driver: Driver = new Driver();

  constructor(private router:Router, private driverService: DriverserviceService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.driver.driverID);
    console.log(this.driver.firstname);
    console.log(this.driver.lastname);
    console.log(this.driver.email);
    console.log(this.driver.password);
    console.log(this.driver.address);
    console.log(this.driver.points);

    this.driverService.createDriver(this.driver)
    .subscribe( data => {
      alert('Driver created successfully.');
    })
    this.router.navigate(['/admin'])
  }

  onCancel(){
    this.router.navigate(['/admin'])
  }

  onLogout(){
    this.router.navigate(['/actuallogin'])
  }

}
