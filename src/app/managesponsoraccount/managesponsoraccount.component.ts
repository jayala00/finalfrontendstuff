import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SponsorserviceService } from '../service/sponsorservice.service';
import { Sponsor } from '../sponsor';

@Component({
  selector: 'app-managesponsoraccount',
  templateUrl: './managesponsoraccount.component.html',
  styleUrls: ['./managesponsoraccount.component.css']
})
export class ManagesponsoraccountComponent implements OnInit {

  sponsor: Sponsor = new Sponsor();

  constructor(private router: Router, private sponsorService: SponsorserviceService) { }

  ngOnInit() {
    this.sponsorService.getSponsor(localStorage.getItem('token'))
      .subscribe( data => {
        this.sponsor = data;
        console.log("data :" + data);
        var sample = JSON.stringify(this.sponsor);
      });
  }

  onLogout(){
    localStorage.removeItem('token')
    this.router.navigate(['/actuallogin'])
  }

  onCancel(){
    this.router.navigate(['/sponsorhomepage'])
  }

  editPassword(){
    this.router.navigate(['/editsponsorpassword'])
  }

  editsponsorid(){
    this.router.navigate(['/editsponsorid'])
  }

  editAddress(){
    this.router.navigate(['/editsponsoraddress'])
  }

  editname(){
    this.router.navigate(['/editsponsorname'])
  }

  editemail(){
    this.router.navigate(['/editsponsoremail'])
  }
}
