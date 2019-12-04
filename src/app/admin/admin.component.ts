import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Admin } from '../admin';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router) { }

  admins: Admin[];

  ngOnInit() {
  }

  onHyperLink(){
    this.router.navigate(['/createdriver'])
  }


  onAdminHyperLink(){
    this.router.navigate(['/createadmin'])
  }

  
  onSponsorHyperLink() {
    this.router.navigate(['/createsponsor'])
  }

  onViewDrivers() {
    this.router.navigate(['/viewdrivers'])
  }
  
  onViewAdmins() {
    this.router.navigate(['/viewadmins'])
  }

  onViewSponsors() {
    this.router.navigate(['/viewsponsors'])
  }

  onLogout(){
    this.router.navigate(['/actuallogin'])
  }
}
