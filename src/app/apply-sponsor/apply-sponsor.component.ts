import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from '../service/admin-service.service';
import { Sponsor } from '../sponsor';
import { send } from 'q';

@Component({
  selector: 'app-apply-sponsor',
  templateUrl: './apply-sponsor.component.html',
  styleUrls: ['./apply-sponsor.component.css']
})
export class ApplySponsorComponent implements OnInit {

  sponsors: Sponsor[];
  link:string
  sponsor:Sponsor = new Sponsor();
  email:string

  constructor(private router: Router, private adminService: AdminServiceService) { }

  ngOnInit() {
    this.adminService.getSponsors()
      .subscribe( data => {
        this.sponsors = data;
        console.log("data :" + data);
        var sample = JSON.stringify(this.sponsors);
      });
  }

  applySponsor(user: Sponsor): void {
    user.email = this.sponsor.email
    this.sendEmail(user.email)
  };

  onLogout(){
    localStorage.removeItem('token')
    this.router.navigate(['/actuallogin'])
  }

  onCancel(){
    this.router.navigate(['/admin'])
  }

  sendEmail(email: string) {
    this.link = "mailto:"+ email
             + "?subject=New%20email " + escape("blah blah")
             + "&body=" + escape("blah blah");
  }
}
