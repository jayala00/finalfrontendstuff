import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { Router } from '@angular/router';
import { AdminserviceService } from '../service/adminservice.service';

@Component({
  selector: 'app-editadminpassword',
  templateUrl: './editadminpassword.component.html',
  styleUrls: ['./editadminpassword.component.css']
})
export class EditadminpasswordComponent implements OnInit {
  admin:Admin = new Admin()

  password:string
  email:string

  constructor(private router: Router, private adminService:AdminserviceService) { }

  ngOnInit() {
  }

  onSubmit(){
    
    console.log(this.password);
    this.email = localStorage.getItem('token')
    console.log(this.email);


    this.admin.password = this.password;
    console.log(this.admin)

    this.adminService.changeAdminPassword(this.admin, this.email).subscribe((reponse)=>{
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
