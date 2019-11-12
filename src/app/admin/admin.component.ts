import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onHyperLink(){
    this.router.navigate(['/createdriver'])
  }


  onAdminHyperLink(){
    this.router.navigate(['/createadmin'])
  }

  
  onCreateSponsor() {
    this.router.navigate(['/createsponsor'])
  }

  onViewDrivers() {
    this.router.navigate(['/viewdrivers'])
  }
  

}
