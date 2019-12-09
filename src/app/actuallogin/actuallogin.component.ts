import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-actuallogin',
  templateUrl: './actuallogin.component.html',
  styleUrls: ['./actuallogin.component.css']
})
export class ActualloginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSignInAdmin(){
    this.router.navigate(['/login'])
  }

  onSignInDriver(){
    this.router.navigate(['/driverlogin'])
  }

  onSignInSponsor(){
    this.router.navigate(['/sponsorlogin'])
  }

  onRegister() {
    this.router.navigate(['/register'])
  }
}
