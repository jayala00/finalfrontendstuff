import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { Router } from '@angular/router';
import { AdminserviceService } from '../service/adminservice.service';

@Component({
  selector: 'app-editadminfirstname',
  templateUrl: './editadminfirstname.component.html',
  styleUrls: ['./editadminfirstname.component.css']
})
export class EditadminfirstnameComponent implements OnInit {
  admin: Admin = new Admin()

  firstname:string
  email:string

  constructor(private router: Router, private adminService: AdminserviceService) { }

  ngOnInit() {
  }

  onSubmit(){
    
    console.log(this.firstname);
    this.email = localStorage.getItem('token')
    console.log(this.email);


    this.admin.firstname = this.firstname;
    console.log(this.admin)

    this.adminService.changeAdminFirstname(this.admin, this.email).subscribe((reponse)=>{
      console.log(reponse);
     }); 

    this.router.navigate(['/manageadminaccount']);
  }

  onCancel(){
    this.router.navigate(['/manageadminaccount'])
  }

  onLogout(){
    localStorage.removeItem('token')
    this.router.navigate(['/actuallogin'])
  }
}
