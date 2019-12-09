import { Component, OnInit } from '@angular/core';
import { Driver } from '../driver';
import { Router } from '@angular/router';
import { DriverserviceService } from '../service/driverservice.service';

@Component({
  selector: 'app-editdrivernamelast',
  templateUrl: './editdrivernamelast.component.html',
  styleUrls: ['./editdrivernamelast.component.css']
})
export class EditdrivernamelastComponent implements OnInit {
  driver: Driver = new Driver();

  lastname:string
  email:string

  constructor(private router: Router, private driverService: DriverserviceService) { }

  ngOnInit() {
  }

  onSubmit(){
    
    console.log(this.lastname);
    this.email = localStorage.getItem('token')
    console.log(this.email);


    this.driver.lastname = this.lastname;
    console.log(this.driver)

    this.driverService.changeDriverLastname(this.driver, this.email).subscribe((reponse)=>{
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
