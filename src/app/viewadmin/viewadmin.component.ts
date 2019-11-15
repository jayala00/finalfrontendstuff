import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AdminServiceService } from '../service/admin-service.service';
import { Admin } from '../admin';

@Component({
  selector: 'app-viewadmin',
  templateUrl: './viewadmin.component.html',
  styleUrls: ['./viewadmin.component.css']
})
export class ViewadminComponent implements OnInit {

  constructor(private router: Router, private adminService: AdminServiceService) { }

  admins: Admin[];

  ngOnInit() {
    this.adminService.getAdmins()
      .subscribe( data => {
        this.admins = data;
      });
  }

  deleteAdmin(user: Admin): void {
    this.adminService.deleteAdmin(user)
      .subscribe( data => {
        this.admins = this.admins.filter(u => u !== user);
      })
  };

}