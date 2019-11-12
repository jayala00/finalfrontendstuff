import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-createsponsor',
  templateUrl: './createsponsor.component.html',
  styleUrls: ['./createsponsor.component.css']
})
export class CreatesponsorComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.router.navigate(['/admin'])
  }

}
