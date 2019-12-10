import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DriverserviceService } from '../service/driverservice.service';
import { Driver } from '../driver';

@Component({
  selector: 'app-driverlogin',
  templateUrl: './driverlogin.component.html',
  styleUrls: ['./driverlogin.component.css']
})
export class DriverloginComponent implements OnInit {

  driver: Driver = new Driver();

  user:string;
  pass:string;
  email:string;
  password:string;


  constructor(private router: Router, private driverService: DriverserviceService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.email)
    console.log(this.password)

    this.driverService.getDriver(this.email)
    .subscribe( data => {
      this.driver = data;
    })

    this.user = this.driver.email;
    this.pass = this.driver.password;

    if ( (this.email == this.user) && (this.password == this.pass)){

      localStorage.setItem('token',this.user)
      this.router.navigate(['/driverhomepage'])
    }
  }

  onReset(){
    this.router.navigate(['/resetpassword'])
  }

}
