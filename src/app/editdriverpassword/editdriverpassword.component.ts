import { Component, OnInit } from '@angular/core';
import { Driver } from '../driver';
import { Router } from '@angular/router';
import { DriverserviceService } from '../service/driverservice.service';

@Component({
  selector: 'app-editdriverpassword',
  templateUrl: './editdriverpassword.component.html',
  styleUrls: ['./editdriverpassword.component.css']
})
export class EditdriverpasswordComponent implements OnInit {
  driver: Driver = new Driver();

  password:string
  email:string

  constructor(private router: Router, private driverService: DriverserviceService) { }

  ngOnInit() {
  }

  onSubmit(){
    
    console.log(this.password);
    this.email = localStorage.getItem('token')
    console.log(this.email);


    this.driver.password = this.password;
    console.log(this.driver)

    this.driverService.changeDriverPassword(this.driver, this.email).subscribe((reponse)=>{
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
