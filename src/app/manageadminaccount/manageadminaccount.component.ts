import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { Router } from '@angular/router';
import { AdminserviceService } from '../service/adminservice.service';

@Component({
  selector: 'app-manageadminaccount',
  templateUrl: './manageadminaccount.component.html',
  styleUrls: ['./manageadminaccount.component.css']
})
export class ManageadminaccountComponent implements OnInit {

  admin:Admin = new Admin()

  constructor(private router: Router, private adminService:AdminserviceService) { }

  ngOnInit() {
    this.adminService.getAdmin(localStorage.getItem('token'))
      .subscribe( data => {
        this.admin = data;
        console.log("data :" + data);
        var sample = JSON.stringify(this.admin);
      });
  }

  onLogout(){
    localStorage.removeItem('token')
    this.router.navigate(['/actuallogin'])
  }

  onCancel(){
    this.router.navigate(['/admin'])
  }

  editPassword(){
    this.router.navigate(['/editadminpassword'])
  }

  editdriverid(){
    this.router.navigate(['/editadminid'])
  }

  editFirstName(){
    this.router.navigate(['/editadminfirstname'])
  }

  editLastname(){
    this.router.navigate(['/editadminlastname'])
  }

  editemail(){
    this.router.navigate(['/editadminemail'])
  }
}
