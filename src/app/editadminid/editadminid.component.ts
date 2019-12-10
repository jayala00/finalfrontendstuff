import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { Router } from '@angular/router';
import { AdminserviceService } from '../service/adminservice.service';

@Component({
  selector: 'app-editadminid',
  templateUrl: './editadminid.component.html',
  styleUrls: ['./editadminid.component.css']
})
export class EditadminidComponent implements OnInit {
  admin: Admin = new Admin()

  ID:Int16Array
  email:string

  constructor(private router: Router, private adminService:AdminserviceService) { }

  ngOnInit() {
  }

  onSubmit(){
    
    console.log(this.ID);
    this.email = localStorage.getItem('token')
    console.log(this.email);


    this.admin.adminID = this.ID;
    console.log(this.admin)

    this.adminService.changeAdminID(this.admin, this.email).subscribe((reponse)=>{
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
