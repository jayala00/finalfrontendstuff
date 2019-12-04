import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Admin} from '../admin';
import {AdminserviceService} from '../service/adminservice.service';

@Component({
  selector: 'app-createadmin',
  templateUrl: './createadmin.component.html',
  styleUrls: ['./createadmin.component.css']
})
export class CreateadminComponent implements OnInit {

  admin: Admin = new Admin();

  constructor(private router:Router, private adminService:AdminserviceService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.admin.adminID);
    console.log(this.admin.firstname);
    console.log(this.admin.lastname);
    console.log(this.admin.email);
    console.log(this.admin.password);
    console.log(this.admin.address);

    this.adminService.createAdmin(this.admin)
    .subscribe( data => {
      alert('Admin created successfully.');
    })
    this.router.navigate(['/admin'])
  }

  onCancel(){
    this.router.navigate(['/admin'])
  }

}
