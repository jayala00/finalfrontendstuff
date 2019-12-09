import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-driverhomepage',
  templateUrl: './driverhomepage.component.html',
  styleUrls: ['./driverhomepage.component.css']
})
export class DriverhomepageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onManageAccount() {
    this.router.navigate(['/managedriveraccount'])
  }

  onViewProfile() {
    this.router.navigate(['/viewdriverprofile'])
  }

  onLogout(){
    localStorage.removeItem('token')
    this.router.navigate(['/actuallogin'])
  }

}
