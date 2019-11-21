import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AdminServiceService } from '../service/admin-service.service';
import { Sponsor } from '../sponsor';

@Component({
  selector: 'app-viewsponsors',
  templateUrl: './viewsponsors.component.html',
  styleUrls: ['./viewsponsors.component.css']
})
export class ViewsponsorsComponent implements OnInit {

  sponsors: Sponsor[];

  constructor(private router: Router, private adminService: AdminServiceService) { }

  ngOnInit() {
    this.adminService.getSponsors()
      .subscribe( data => {
        this.sponsors = data;
        console.log("data :" + data);
        var sample = JSON.stringify(this.sponsors);
      });
  }

  deleteSponsors(user: Sponsor): void {
    this.adminService.deleteSponsor(user)
      .subscribe( data => {
        this.sponsors = this.sponsors.filter(u => u !== user);
      })
  };

}
