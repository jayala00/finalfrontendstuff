import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  points:Int16Array

  constructor(private router: Router, private http:HttpClient) { }

  ngOnInit() {
  }
  onLogout(){
    localStorage.removeItem('token')
    this.router.navigate(['/actuallogin'])
  }

  goBack() {
    this.router.navigate(['/sponsorhomepage'])
  }
}
