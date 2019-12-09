import { Component, OnInit } from '@angular/core';
import { Driver } from '../driver';
import { Router } from '@angular/router';
import { DriverserviceService } from '../service/driverservice.service';

@Component({
  selector: 'app-editid',
  templateUrl: './editid.component.html',
  styleUrls: ['./editid.component.css']
})
export class EditidComponent implements OnInit {
  driver: Driver = new Driver();

  ID:Int16Array
  email:string

  constructor(private router: Router, private driverService: DriverserviceService) { }

  ngOnInit() {
  }

  onSubmit(){
    
    console.log(this.ID);
    this.email = localStorage.getItem('token')
    console.log(this.email);


    this.driver.driverID = this.ID;
    console.log(this.driver)

    this.driverService.changeDriverDriverID(this.driver, this.email).subscribe((reponse)=>{
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
