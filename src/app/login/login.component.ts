import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = 'admin';
  pass = 'password';
  email:string;
  password:string;

  constructor(private router: Router) { }

  ngOnInit() {

  }

  onSubmit(){
    console.log(this.email);
    console.log(this.password);

    
    if ( (this.email == this.user) && (this.password == this.pass)){
      this.router.navigate(['/admin'])
    }


    
  }

  


}
