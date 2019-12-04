import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Sponsor } from '../sponsor';
import {SponsorserviceService} from '../service/sponsorservice.service';

@Component({
  selector: 'app-createsponsor',
  templateUrl: './createsponsor.component.html',
  styleUrls: ['./createsponsor.component.css']
})
export class CreatesponsorComponent implements OnInit {

  sponsor: Sponsor = new Sponsor();

  constructor(private router:Router, private sponsorService:SponsorserviceService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.sponsor.sponsorID);
    console.log(this.sponsor.firstname);
    console.log(this.sponsor.lastname);
    console.log(this.sponsor.email);
    console.log(this.sponsor.password);
    console.log(this.sponsor.address);

    this.sponsorService.createSponsor(this.sponsor)
    .subscribe( data => {
      alert('Sponsor created successfully.');
    })
    this.router.navigate(['/admin'])
  }

  onCancel(){
    this.router.navigate(['/admin'])
  }

}
