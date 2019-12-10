import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SponsorserviceService } from '../service/sponsorservice.service';
import { Sponsor } from '../sponsor';

@Component({
  selector: 'app-sponsorprofile',
  templateUrl: './sponsorprofile.component.html',
  styleUrls: ['./sponsorprofile.component.css']
})
export class SponsorprofileComponent implements OnInit {

  sponsors: Sponsor = new Sponsor();

  constructor(private router: Router, private sponsorService: SponsorserviceService) { }
  
  ngOnInit() {
    this.sponsorService.getSponsor(localStorage.getItem('token'))
      .subscribe( data => {
        this.sponsors = data;
        console.log("data :" + data);
        var sample = JSON.stringify(this.sponsors);
      });
  };

  onLogout(){
    localStorage.removeItem('token')
    this.router.navigate(['/actuallogin'])
  }

  onCancel(){
    this.router.navigate(['/sponsorhomepage'])
  }

}
