import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DriverserviceService } from '../service/driverservice.service';
import { Driver } from '../driver';

@Component({
  selector: 'app-editaddress',
  templateUrl: './editaddress.component.html',
  styleUrls: ['./editaddress.component.css']
})
export class EditaddressComponent implements OnInit {
  driver: Driver = new Driver();

  address:string
  email:string

  constructor(private router: Router, private driverService: DriverserviceService) { }

  ngOnInit() {
  }

  onSubmit(){
    
    console.log(this.address);
    this.email = localStorage.getItem('token')
    console.log(this.email);


    this.driver.address = this.address;
    console.log(this.driver)

    this.driverService.changeDriverAddress(this.driver, this.email).subscribe((reponse)=>{
      console.log(reponse);
     }); 

    this.router.navigate(['/managedriveraccount']);
  }

  onCancel(){
    this.router.navigate(['/managedriveraccount'])
  }

  onLogout(){
    localStorage.removeItem('token')
    this.router.navigate(['/actuallogin'])
  }
}
