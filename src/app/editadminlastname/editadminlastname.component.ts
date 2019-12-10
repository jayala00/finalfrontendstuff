import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { Router } from '@angular/router';
import { AdminserviceService } from '../service/adminservice.service';

@Component({
  selector: 'app-editadminlastname',
  templateUrl: './editadminlastname.component.html',
  styleUrls: ['./editadminlastname.component.css']
})
export class EditadminlastnameComponent implements OnInit {
  admin: Admin = new Admin()

  lastname:string
  email:string

  constructor(private router: Router, private adminService: AdminserviceService) { }

  ngOnInit() {
  }

  onSubmit(){
    
    console.log(this.lastname);
    this.email = localStorage.getItem('token')
    console.log(this.email);


    this.admin.lastname = this.lastname;
    console.log(this.admin)

    this.adminService.changeAdminLastname(this.admin, this.email).subscribe((reponse)=>{
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
