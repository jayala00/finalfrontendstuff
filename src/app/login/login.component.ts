import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Admin } from '../admin';
import { AdminserviceService } from '../service/adminservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  admin: Admin = new Admin();

  user:string;
  pass:string;
  email:string;
  password:string;

  constructor(private router: Router, private adminService: AdminserviceService) { }

  ngOnInit() {

  }

  onSubmit(){
    console.log(this.email);
    console.log(this.password);


     this.adminService.getAdmin(this.email)
     .subscribe( data => {
       this.admin = data;
     })

     this.user = this.admin.email;
     this.pass = this.admin.password;

     if ( (this.email == this.user) && (this.password == this.pass)){
      localStorage.setItem('token', this.user)

      this.router.navigate(['/admin'])
    }


    
  }

  


}
