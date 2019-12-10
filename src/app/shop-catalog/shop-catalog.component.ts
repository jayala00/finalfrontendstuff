import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DriverserviceService } from '../service/driverservice.service';
import { Driver } from '../driver';
import { Router } from '@angular/router';


@Component({
  selector: 'app-shop-catalog',
  templateUrl: './shop-catalog.component.html',
  styleUrls: ['./shop-catalog.component.css']
})
export class ShopCatalogComponent implements OnInit {

  driver: Driver = new Driver()
  points:Int16Array
  

  constructor(private router: Router, private http:HttpClient, private driverService: DriverserviceService) { }

  ngOnInit() { }

  onBuy() {
    console.log("buy clicked")
    console.log(this.points)
    this.driver.points = this.points
    console.log(this.driver.points)
    this.driverService.deleteDriverPoints( this.driver , localStorage.getItem('token'))
  }

  onLogout(){
    localStorage.removeItem('token')
    this.router.navigate(['/actuallogin'])
  }

  goBack() {
    this.router.navigate(['/driverhomepage'])
  }
}
