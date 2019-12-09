import { Component, OnInit } from '@angular/core';
import { Sponsor } from '../sponsor';
import { Router } from '@angular/router';
import { SponsorserviceService } from '../service/sponsorservice.service';

@Component({
  selector: 'app-sponsorlogin',
  templateUrl: './sponsorlogin.component.html',
  styleUrls: ['./sponsorlogin.component.css']
})
export class SponsorloginComponent implements OnInit {

  sponsor: Sponsor = new Sponsor();

  user:string;
  pass:string;
  email:string;
  password:string;

  constructor(private router: Router, private sponsorService: SponsorserviceService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.email)
    console.log(this.password)

    this.sponsorService.getSponsor(this.email)
    .subscribe( data => {
      this.sponsor = data;
    })

    this.user = this.sponsor.email;
    this.pass = this.sponsor.password;

    if ( (this.email == this.user) && (this.password == this.pass)){

      localStorage.setItem('token',this.user)
      this.router.navigate(['/sponsorhomepage'])
    }
  }
}
