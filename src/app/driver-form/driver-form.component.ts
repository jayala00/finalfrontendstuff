import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Driver } from '../driver';

@Component({
  selector: 'app-driver-form',
  templateUrl: './driver-form.component.html',
  styleUrls: ['./driver-form.component.css']
})
export class DriverFormComponent implements OnInit {

  user: Driver;
 
  constructor(
    private route: ActivatedRoute, 
      private router: Router) {
    this.user = new Driver();
  }
 
  ngOnInit() {
  }

  gotoUserList() {
    this.router.navigate(['/driver']);
  }
}
