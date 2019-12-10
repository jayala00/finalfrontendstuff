import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DriverserviceService } from '../service/driverservice.service';
import { Driver } from '../driver';

@Component({
  selector: 'app-add-points',
  templateUrl: './add-points.component.html',
  styleUrls: ['./add-points.component.css']
})
export class AddPointsComponent implements OnInit {

  driver: Driver = new Driver();

  points:Int16Array;
  email:string;

  constructor(private router: Router, private driverService: DriverserviceService) { }

  ngOnInit() {
  }

  addPoints(){

    console.log(this.points);
    console.log(this.email);

    this.driver.points = this.points;
    console.log(this.driver)

    this.driverService.addDriverPoints(this.driver, this.email).subscribe((reponse)=>{
      console.log(reponse);
     }); 

    this.router.navigate(['/sponsorviewsdrivers']);
  }

  onCancel(){
    this.router.navigate(['sponsorviewsdrivers'])
  }

  onLogout(){
    localStorage.removeItem('token')
    this.router.navigate(['/actuallogin'])
  }

}
