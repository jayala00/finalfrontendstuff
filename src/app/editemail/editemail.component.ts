import { Component, OnInit } from '@angular/core';
import { Driver } from '../driver';
import { Router } from '@angular/router';
import { DriverserviceService } from '../service/driverservice.service';

@Component({
  selector: 'app-editemail',
  templateUrl: './editemail.component.html',
  styleUrls: ['./editemail.component.css']
})
export class EditemailComponent implements OnInit {
  driver: Driver = new Driver();

  newemail:string
  email:string

  constructor(private router: Router, private driverService: DriverserviceService) { }

  ngOnInit() {
  }

  onSubmit(){
    
    console.log(this.newemail);
    this.email = localStorage.getItem('token')
    console.log(this.email);


    this.driver.email = this.newemail;
    console.log(this.driver)

    this.driverService.changeDriverEmail(this.driver, this.email).subscribe((reponse)=>{
      console.log(reponse);
     }); 

     localStorage.setItem('token',this.newemail)

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
