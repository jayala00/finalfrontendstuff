import { Component, OnInit } from '@angular/core';
import { Driver } from '../driver';
 
@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css']
})
export class DriverListComponent implements OnInit {
 
  users: Driver[];
 
  constructor() {
  }
 
  ngOnInit() {
    
  }
}
