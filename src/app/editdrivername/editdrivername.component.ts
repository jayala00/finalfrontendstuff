import { Component, OnInit } from '@angular/core';
import { Driver } from '../driver';
import { Router } from '@angular/router';
import { DriverserviceService } from '../service/driverservice.service';

@Component({
  selector: 'app-editdrivername',
  templateUrl: './editdrivername.component.html',
  styleUrls: ['./editdrivername.component.css']
})
export class EditdrivernameComponent implements OnInit {
  driver: Driver = new Driver();

  firstname:string
  email:string

  constructor(private router: Router, private driverService: DriverserviceService) { }

  ngOnInit() {
  }

  onSubmit(){
    
    console.log(this.firstname);
    this.email = localStorage.getItem('token')
    console.log(this.email);


    this.driver.firstname = this.firstname;
    console.log(this.driver)

    this.driverService.changeDriverFirstname(this.driver, this.email).subscribe((reponse)=>{
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
