import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { Router } from '@angular/router';
import { AdminserviceService } from '../service/adminservice.service';

@Component({
  selector: 'app-editadminemail',
  templateUrl: './editadminemail.component.html',
  styleUrls: ['./editadminemail.component.css']
})
export class EditadminemailComponent implements OnInit {
  admin: Admin = new Admin()

  newemail:string
  email:string

  constructor(private router: Router, private adminService: AdminserviceService) { }

  ngOnInit() {
  }

  onSubmit(){
    
    console.log(this.newemail);
    this.email = localStorage.getItem('token')
    console.log(this.email);


    this.admin.email = this.newemail;
    console.log(this.admin)

    this.adminService.changeAdminEmail(this.admin, this.email).subscribe((reponse)=>{
      console.log(reponse);
     }); 

     localStorage.setItem('token',this.newemail)

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
